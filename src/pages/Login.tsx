import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../store/useProgressStore';
import { Shield, Eye, EyeOff, Feather, Sparkles } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const login = useProgressStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      navigate('/welcome');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-transparent to-[var(--color-wood-dark)]" />
      
      <div className="flex-1 flex items-center justify-center w-full z-10 p-4">
        <div className="w-full max-w-md bg-scroll p-10 flex flex-col items-center border border-[var(--color-wood-light)]">
          <h1 className="font-display text-5xl mb-2 text-center text-[var(--color-ink)]">Academic Excellence</h1>
          <h2 className="font-display text-4xl mb-6 text-center font-bold">Resume Your Quest</h2>
          <p className="text-sm text-center mb-8 font-serif">Welcome back, Scholar. Please identify yourself.</p>
          
          <form onSubmit={handleLogin} className="w-full space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold font-sans uppercase tracking-wider">UNNC ID / Email</label>
              <div className="relative">
                <Feather className="absolute left-3 top-3 text-[var(--color-ink-light)]" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[var(--color-parchment-dark)]/50 border-b-2 border-[var(--color-ink)] px-10 py-3 focus:outline-none focus:border-[var(--color-cyan-glow)] font-serif italic rounded-sm"
                  placeholder="e.g. 20451234@nottingham.edu.cn"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold font-sans uppercase tracking-wider">Password</label>
              <div className="relative">
                <Shield className="absolute left-3 top-3 text-[var(--color-ink-light)]" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[var(--color-parchment-dark)]/50 border-b-2 border-[var(--color-ink)] px-10 py-3 focus:outline-none focus:border-[var(--color-cyan-glow)] font-serif rounded-sm"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[var(--color-ink-light)] hover:text-[var(--color-ink)]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm font-serif">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[var(--color-wood-dark)]" />
                Remember Me
              </label>
              <a href="#" className="hover:underline font-bold">Forgot Password?</a>
            </div>
            
            <button 
              type="submit" 
              className="w-full mt-6 py-4 metallic-frame text-[var(--color-cyan-glow)] font-bold font-sans uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              Enter the Odyssey <Sparkles size={18} />
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm font-serif">
            New Scholar? <a href="#" className="font-bold hover:underline">Register here</a>
          </div>
          
          <div className="mt-8 p-4 border-2 border-[var(--color-wood-light)] rounded-md flex items-center gap-4 bg-[var(--color-parchment-dark)]/30 w-full justify-center">
            <Shield className="text-[var(--color-wood-dark)]" size={32} />
            <div className="text-xs font-sans">
              <strong>ACADEMIC CREST</strong><br/>
              Secured by Mechanical High-Level Guard
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full z-10 bg-[var(--color-wood-dark)] border-t border-[var(--color-wood-light)] py-4 px-8 flex justify-between items-center text-xs text-[var(--color-parchment-dark)] font-sans">
        <div className="font-bold text-sm">The Academic Odyssey</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--color-parchment)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--color-parchment)]">Terms of Service</a>
          <a href="#" className="hover:text-[var(--color-parchment)]">Support</a>
        </div>
        <div>© 2024 University of Nottingham Ningbo China. All rights reserved.</div>
      </footer>
    </div>
  );
};
