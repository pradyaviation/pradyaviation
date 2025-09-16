import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface LaunchItem {
  name: string;
  image: string;
  countdown?: boolean;
  targetDate?: Date;
  subtitle?: string;
}

const UpcomingLaunchesSection = () => {
  const navigate = useNavigate();

  // Target date ~22h 23m 26s from now to mimic screenshot countdown
  const initialTarget = new Date(Date.now() + (22 * 60 * 60 + 23 * 60 + 26) * 1000);
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = initialTarget.getTime() - now;
      if (diff <= 0) {
        setTimeLeft('LAUNCHED');
        clearInterval(interval);
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`T-${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const launches: LaunchItem[] = [
    {
      name: 'Pilot program & Acquisition',
      image: '/videos/airtaxi 2s.jpg',
      subtitle: 'Launching in 2027'
    },
    {
      name: 'Service launch',
      image: '/videos/airtaxi 2s.jpg',
      subtitle: 'Andhra Pradesh & Telangana',
      
    }
  ];

  return (
  <div className="block sm:hidden bg-black text-white px-4 pt-6 pb-2">
      <h2 className="text-[#F9F9F9] text-sm tracking-[0.15em] font-semibold mb-3">
        WHAT'S AHEAD
      </h2>
      <div className="border-t border-zinc-800" />
      <div>
        {launches.map((launch, idx) => {
          const subtitle = launch.countdown ? timeLeft : launch.subtitle;
          return (
            <div
              key={idx}
              onClick={() => navigate('/objectives')}
              className="flex items-center justify-between border-b border-zinc-800 py-5 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={launch.image}
                  alt={launch.name}
                  className="w-16 h-16 object-cover rounded-md"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-medium">{launch.name}</span>
                  {subtitle && (
                    <span className="text-[11px] text-zinc-400 mt-1 tracking-wide">
                      {subtitle}
                    </span>
                  )}
                </div>
              </div>
              <ArrowRight size={18} className="text-zinc-500 group-hover:text-white transition-colors duration-300" />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => navigate('/objectives')}
        className="mt-4 w-full flex items-center justify-center gap-2 text-xs tracking-wide text-zinc-400 hover:text-white transition-colors duration-300"
      >
        <span>VIEW ALL</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default UpcomingLaunchesSection;
