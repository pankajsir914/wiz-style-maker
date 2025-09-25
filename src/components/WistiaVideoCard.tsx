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
      </div>
    </motion.div>
  );
};

export default WistiaVideoCard;