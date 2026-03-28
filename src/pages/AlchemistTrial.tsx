import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ParchmentCard } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useProgressStore } from '../store/useProgressStore';
import { reviewEngine } from '../lib/engines/reviewEngine';
import { hintEngine } from '../lib/engines/hintEngine';

export const AlchemistTrial = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(60);
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; feedback: string } | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [isGettingHint, setIsGettingHint] = useState(false);
  const completeTask = useProgressStore(state => state.completeTask);

  const question = "What is a perceptron in a neural network?";
  const context = "A perceptron is the fundamental unit of a neural network, a simple mathematical model of a biological neuron.";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async () => {
    if (!answer.trim()) return;
    
    setIsSubmitting(true);
    setFeedback(null);
    
    try {
      const result = await reviewEngine.reviewAnswer(question, answer);
      setFeedback(result);
      
      if (result.isCorrect) {
        setTimeout(() => {
          if (taskId) completeTask(taskId);
          navigate(`/quest/completed`);
        }, 2000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGetHint = async () => {
    setIsGettingHint(true);
    try {
      const result = await hintEngine.getHint(question, context);
      setHint(result);
    } finally {
      setIsGettingHint(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center relative">
      <h1 className="font-display text-4xl mb-12 text-glow">The Alchemist's Trial: Neural Networks</h1>
      
      <div className="flex-1 w-full max-w-4xl relative flex justify-center items-center">
        {/* Background Library */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center rounded-lg shadow-2xl z-0 opacity-40 mix-blend-screen" />
        
        {/* Streak Multiplier */}
        <div className="absolute top-[-20px] z-20 flex flex-col items-center">
          <div className="text-sm font-display text-[var(--color-cyan-glow)]">Streak Multiplier</div>
          <div className="w-16 h-16 rounded-full bg-[var(--color-wood-dark)] border-2 border-[var(--color-cyan-glow)] flex items-center justify-center text-2xl font-bold text-[var(--color-cyan-glow)] box-glow relative">
            <div className="absolute -top-4 text-3xl">🔥</div>
            X5
          </div>
        </div>

        {/* Flask */}
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="w-32 h-48 relative">
            <div className="absolute bottom-0 w-24 h-24 left-4 rounded-full bg-cyan-400/50 blur-md" />
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046269.png" alt="Flask" className="w-full h-full object-contain opacity-80 drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" style={{ filter: 'invert(80%) sepia(50%) saturate(3000%) hue-rotate(130deg) brightness(150%) contrast(100%)' }} referrerPolicy="no-referrer" />
          </div>
          <div className="text-sm font-display text-[var(--color-cyan-glow)] mt-4">Alchemist's Flask</div>
        </div>

        {/* Question Scroll */}
        <ParchmentCard className="w-full max-w-xl min-h-[400px] z-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-12 flex flex-col justify-center items-center">
          <h2 className="font-serif text-3xl mb-8 font-bold text-[var(--color-ink)] text-center leading-tight">
            {question}
          </h2>
          
          <div className="w-full flex flex-col gap-4">
            <textarea 
              className="w-full h-32 p-4 bg-[var(--color-parchment-light)] border-2 border-[var(--color-wood-light)] rounded-md font-serif text-lg text-[var(--color-ink)] resize-none focus:outline-none focus:border-[var(--color-cyan-glow)] transition-colors"
              placeholder="Transcribe your knowledge here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={isSubmitting || feedback?.isCorrect}
            />
            
            <div className="flex gap-4">
              <Button 
                onClick={handleGetHint} 
                variant="secondary" 
                className="flex-1"
                disabled={isGettingHint || feedback?.isCorrect}
              >
                {isGettingHint ? 'Consulting Oracle...' : 'Seek Hint'}
              </Button>
              <Button 
                onClick={handleSubmit} 
                className="flex-1"
                disabled={isSubmitting || !answer.trim() || feedback?.isCorrect}
              >
                {isSubmitting ? 'Analyzing...' : 'Submit Answer'}
              </Button>
            </div>
            
            {hint && (
              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/50 rounded-md">
                <p className="font-serif text-sm text-blue-800"><strong>Oracle's Whisper:</strong> {hint}</p>
              </div>
            )}
            
            {feedback && (
              <div className={`mt-4 p-4 rounded-md border ${feedback.isCorrect ? 'bg-green-900/20 border-green-500/50' : 'bg-red-900/20 border-red-500/50'}`}>
                <p className={`font-serif text-sm ${feedback.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  <strong>{feedback.isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {feedback.feedback}
                </p>
              </div>
            )}
          </div>
        </ParchmentCard>

        {/* Timer Burner */}
        <div className="absolute bottom-12 z-20 flex flex-col items-center">
          <div className="text-sm font-display text-[var(--color-parchment)] mb-2">Burner</div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50 blur-sm">🔥🔥🔥</div>
            <div className="bg-[var(--color-wood-dark)] border-2 border-[var(--color-wood-light)] px-8 py-2 rounded-md font-display text-3xl text-[var(--color-cyan-glow)] text-glow relative z-10">
              00:{timeLeft.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
