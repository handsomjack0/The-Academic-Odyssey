import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const courses = [
  { id: 'quantum', title: 'QUANTUM ARCANA', progress: 0 },
  { id: 'ethics', title: 'MECHANICAL ETHICS', progress: 0 },
  { id: 'data', title: 'HISTORICAL DATA MINING', progress: 0 },
  { id: 'cyber', title: 'CYBERNETIC RENAISSANCE', progress: 0 },
  { id: 'neural-network', title: 'NEURAL NETWORKS', progress: 35, active: true },
  { id: 'digital', title: 'DIGITAL DEVELOPMENT', progress: 0 },
  { id: 'management', title: 'ETHICAL MANAGEMENT', progress: 0 },
];

export const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col relative p-8">
      {/* Background Library */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-wood-dark)] via-[var(--color-wood-dark)]/80 to-[var(--color-wood-dark)]/90 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center mb-12">
        <h1 className="font-display text-5xl text-[var(--color-parchment)] mb-8 tracking-wider">Archives Course Library</h1>
        
        <div className="relative w-[500px] flex items-center">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search Courses..." 
              className="w-full bg-transparent border-2 border-[var(--color-cyan-glow)] rounded-l-full py-3 px-6 text-[var(--color-parchment)] focus:outline-none box-glow font-sans"
            />
            <Search className="absolute left-4 top-3.5 text-[var(--color-cyan-glow)]" size={20} />
          </div>
          <div className="h-12 w-32 bg-[linear-gradient(to_right,#8a6a4b,#4a3320)] border-y-2 border-r-2 border-[#a68a61] rounded-r-full flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] relative">
            <div className="absolute left-0 w-4 h-14 bg-[#a68a61] rounded-sm transform -translate-x-2" />
            <div className="absolute left-4 w-2 h-12 bg-[#3d2b1f]" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 grid grid-cols-4 gap-x-12 gap-y-16 px-16 max-w-7xl mx-auto w-full">
        {courses.map((course, idx) => (
          <div key={course.id} className={`flex flex-col items-center gap-4 ${course.active ? 'col-span-2 row-span-2' : ''}`}>
            <h3 className="font-sans font-bold text-center text-lg text-[var(--color-cyan-glow)] text-glow tracking-widest uppercase">{course.title}</h3>
            
            {course.active ? (
              <div 
                onClick={() => navigate(`/quest/${course.id}`)}
                className="w-full aspect-[1.8/1] bg-scroll rounded-sm cursor-pointer transform hover:scale-105 transition-transform flex p-8 gap-8 relative shadow-[0_0_40px_rgba(0,240,255,0.2)]"
              >
                {/* Book Left Page */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--color-wood-light)] shadow-[-1px_0_2px_rgba(0,0,0,0.1)]" />
                  <div className="w-40 h-40 rounded-full border-4 border-[var(--color-wood-light)] flex items-center justify-center relative">
                    <div className="absolute inset-2 border-2 border-[var(--color-wood-light)] rounded-full border-dashed" />
                    <div className="w-16 h-16 rounded-full border-4 border-[var(--color-wood-dark)] flex items-center justify-center bg-[var(--color-parchment-dark)]">
                      <div className="w-8 h-8 rounded-full border-2 border-[var(--color-wood-dark)]" />
                    </div>
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full border-4 border-[var(--color-wood-dark)] flex items-center justify-center bg-[var(--color-parchment-dark)]">
                      <div className="w-4 h-4 rounded-full border-2 border-[var(--color-wood-dark)]" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border-4 border-[var(--color-wood-dark)] flex items-center justify-center bg-[var(--color-parchment-dark)]">
                      <div className="w-6 h-6 rounded-full border-2 border-[var(--color-wood-dark)]" />
                    </div>
                  </div>
                </div>
                {/* Book Right Page */}
                <div className="flex-1 flex flex-col justify-center text-[var(--color-ink)] pl-4">
                  <p className="font-bold font-sans text-sm tracking-wider mb-1">Syllabus:</p>
                  <p className="text-sm font-serif mb-6">Module 1 - Qubits & Spells</p>
                  <p className="font-bold font-sans text-sm tracking-wider mb-1">Instructor:</p>
                  <p className="text-sm font-serif mb-8">Sage Alistair Vance (AI Hologram)</p>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border-4 border-[var(--color-wood-dark)] flex items-center justify-center overflow-hidden relative bg-[var(--color-parchment-dark)] shadow-inner">
                      <div className="absolute bottom-0 w-full bg-[var(--color-cyan-glow)] box-glow transition-all duration-1000" style={{ height: `${course.progress}%` }} />
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
                    </div>
                    <div className="flex-1">
                      <div className="text-center text-sm font-bold font-sans mb-2">{course.progress}% Progress</div>
                      <div className="h-4 bg-[var(--color-wood-dark)] rounded-full overflow-hidden border border-[var(--color-wood-light)] shadow-inner">
                        <div className="h-full bg-[var(--color-cyan-glow)] box-glow transition-all duration-1000 relative" style={{ width: `${course.progress}%` }}>
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-48 h-32 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] bg-[#5c4033] border-4 border-[#3e2723] rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-transform flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-double border-[#8b7355] m-1 rounded-sm pointer-events-none" />
                <div className="absolute inset-0 bg-[var(--color-cyan-glow)] opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="w-16 h-16 rounded-full border-2 border-[var(--color-cyan-glow)] opacity-40 flex items-center justify-center relative">
                  <div className="absolute inset-1 border border-[var(--color-cyan-glow)] rounded-full border-dashed" />
                  <div className="w-6 h-6 rounded-full border-2 border-[var(--color-cyan-glow)]" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Fast Travel Compass */}
      <div className="absolute bottom-0 right-0 w-80 h-80 border-l-2 border-t-2 border-[var(--color-cyan-glow)] rounded-tl-full bg-[var(--color-wood-dark)]/80 backdrop-blur-md flex items-center justify-center p-8 shadow-[-10px_-10px_30px_rgba(0,240,255,0.1)] z-20">
        <div className="relative w-full h-full rounded-full border-2 border-[var(--color-cyan-glow)] flex items-center justify-center border-glow">
          <div className="absolute inset-2 rounded-full border border-[var(--color-cyan-glow)] border-dashed opacity-50" />
          <span className="absolute top-2 text-sm font-bold text-[var(--color-cyan-glow)]">N</span>
          <span className="absolute bottom-2 text-sm font-bold text-[var(--color-cyan-glow)]">S</span>
          <span className="absolute left-2 text-sm font-bold text-[var(--color-cyan-glow)]">W</span>
          <span className="absolute right-2 text-sm font-bold text-[var(--color-cyan-glow)]">E</span>
          
          {/* Compass Needle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1 h-[90%] bg-gradient-to-b from-[var(--color-cyan-glow)] to-transparent transform rotate-45 opacity-50" />
            <div className="w-[90%] h-1 bg-gradient-to-r from-[var(--color-cyan-glow)] to-transparent transform rotate-45 opacity-50 absolute" />
          </div>

          <div className="text-center relative z-10 w-full h-full">
            <p className="font-display text-xl text-[var(--color-parchment)] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap transform -rotate-45">Fast Travel</p>
            
            <div className="absolute top-1/4 right-8 text-xs text-[var(--color-parchment)] hover:text-[var(--color-cyan-glow)] cursor-pointer transition-colors">Archives</div>
            <div className="absolute top-1/2 left-8 text-xs text-[var(--color-parchment)] hover:text-[var(--color-cyan-glow)] cursor-pointer transition-colors transform -translate-y-1/2">Main Hall</div>
            <div className="absolute top-1/2 right-4 text-xs text-[var(--color-parchment)] hover:text-[var(--color-cyan-glow)] cursor-pointer transition-colors transform -translate-y-1/2">Laboratories</div>
            <div className="absolute bottom-1/4 left-1/2 text-xs text-[var(--color-parchment)] hover:text-[var(--color-cyan-glow)] cursor-pointer transition-colors transform -translate-x-1/2">Common Room</div>
          </div>
        </div>
      </div>
    </div>
  );
};
