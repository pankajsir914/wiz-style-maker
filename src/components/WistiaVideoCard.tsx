import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import WistiaVideo from './WistiaVideo';

interface WistiaVideoItem {
  id: number;
  wistiaMediaId: string;
  creator: {
    name: string;
    avatar: string;
    handle: string;
  };
  views: string;
  caption: string;
}

const WistiaVideoCard = ({ video, index }: { video: WistiaVideoItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-xl bg-card border border-border"
      whileHover={{ scale: 1.02 }}
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] bg-muted">
        <WistiaVideo
          mediaId={video.wistiaMediaId}
          aspectRatio="0.5625"
          className="w-full h-full"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

        {/* Creator Info */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WistiaVideoCard;