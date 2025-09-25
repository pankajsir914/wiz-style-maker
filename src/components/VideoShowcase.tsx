import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import WistiaVideoCard from './WistiaVideoCard';

interface VideoItem {
  id: number;
  videoUrl?: string;
  wistiaMediaId?: string;
  isWistia?: boolean;
  thumbnailUrl?: string;
  creator: {
    name: string;
    avatar: string;
    handle: string;
  };
  views: string;
  caption: string;
}

const videoData: VideoItem[] = [
  {
    id: 1,
    isWistia: true,
    wistiaMediaId: 'fq75l8ixns',
    creator: {
      name: 'Editorzhub Team',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Editorzhub',
      handle: '@editorzhub'
    },
    views: '5.2M',
    caption: 'Revolutionary marketing strategies that drive results'
  },
  {
    id: 2,
    isWistia: true,
    wistiaMediaId: 'hg15v9veq2',
    creator: {
      name: 'Editorzhub Creative',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Creative',
      handle: '@editorzhub_creative'
    },
    views: '2.3M',
    caption: 'Cutting-edge digital solutions and creative excellence'
  },
  {
    id: 3,
    videoUrl: 'https://cdn.pixabay.com/video/2023/07/18/172114-846497611_large.mp4',
    creator: {
      name: 'Emily Davis',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      handle: '@emilyd'
    },
    views: '3.1M',
    caption: 'Mobile app UI/UX animation'
  },
  {
    id: 4,
    videoUrl: 'https://cdn.pixabay.com/video/2023/10/22/185990-877449262_large.mp4',
    creator: {
      name: 'Alex Kumar',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      handle: '@alexk'
    },
    views: '945K',
    caption: 'Social media marketing campaign'
  }
];

const VideoCard = ({ video, index }: { video: VideoItem; index: number }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              // Autoplay might be blocked
              setIsPlaying(false);
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-xl bg-card border border-border"
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] bg-muted">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

        {/* Mute/Unmute Button */}
        <Button
          onClick={toggleMute}
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white border border-white/10"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>

        {/* Creator Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 border-2 border-white/20">
              <AvatarImage src={video.creator.avatar} alt={video.creator.name} />
              <AvatarFallback>{video.creator.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">{video.creator.name}</h3>
                <span className="text-xs text-white/60">{video.creator.handle}</span>
              </div>
              <p className="text-xs text-white/80 mt-1 line-clamp-2">{video.caption}</p>
              <div className="flex items-center gap-1 mt-2">
                <Eye className="h-3 w-3 text-white/60" />
                <span className="text-xs text-white/60">{video.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Creative Excellence
            </span>{' '}
            in Motion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest video content showcasing innovative designs, marketing campaigns, and digital transformations
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            video.isWistia ? (
              <WistiaVideoCard key={video.id} video={video as any} index={index} />
            ) : (
              <VideoCard key={video.id} video={video} index={index} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;