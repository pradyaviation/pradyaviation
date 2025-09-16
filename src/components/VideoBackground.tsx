
import { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  className?: string;
  poster?: string;
  children?: React.ReactNode;
}

const VideoBackground = ({ className = '', poster, children }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Optimize video playback
    video.playbackRate = 0.8;
    
    const handleCanPlay = () => {
      video.play().catch(() => {
        // Fallback to poster if autoplay fails
        console.log('Video autoplay prevented, showing poster');
      });
    };

    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster || "/api/placeholder/1920/1080"}
      >
        {/* High-quality video sources will be added here */}
        <source src="/videos/AIRAVATHa-cinematic-voyage-15/public/videos/Pointtopoint_airport_transfer_202507242058_.mp4" type="video/mp4" />
        <source src="/videos/AIRAVATHa-cinematic-hero.webm" type="video/webm" />
        {/* Fallback for unsupported browsers */}
        Your browser does not support the video tag.
      </video>
      
      {/* Content overlay */}
      {children}
    </div>
  );
};

export default VideoBackground;
