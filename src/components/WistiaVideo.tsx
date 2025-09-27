import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WistiaVideoProps {
  mediaId: string;
  aspectRatio?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const WistiaVideo = ({ 
  mediaId, 
  aspectRatio = '0.5625', 
  className = '',
  autoPlay = true,
  loop = true,
  muted = true
}: WistiaVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(muted);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let scriptPlayer: HTMLScriptElement | null = null;
    let scriptEmbed: HTMLScriptElement | null = null;

    const loadWistiaScripts = async () => {
      try {
        // Check if scripts are already loaded
        if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
          scriptPlayer = document.createElement('script');
          scriptPlayer.src = 'https://fast.wistia.com/player.js';
          scriptPlayer.async = true;
          document.body.appendChild(scriptPlayer);
        }

        if (!document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`)) {
          scriptEmbed = document.createElement('script');
          scriptEmbed.src = `https://fast.wistia.com/embed/${mediaId}.js`;
          scriptEmbed.async = true;
          scriptEmbed.type = 'module';
          document.body.appendChild(scriptEmbed);
        }

        // Create style element for loading state
        const style = document.createElement('style');
        style.textContent = `
          wistia-player[media-id='${mediaId}']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
            display: block;
            filter: blur(5px);
            padding-top: ${parseFloat(aspectRatio) * 100}%;
          }
        `;
        document.head.appendChild(style);

        // Create the Wistia player element
        if (containerRef.current) {
          const wistiaPlayer = document.createElement('wistia-player');
          wistiaPlayer.setAttribute('media-id', mediaId);
          wistiaPlayer.setAttribute('aspect', aspectRatio);
          
          // Add autoplay, loop and mute attributes
          if (autoPlay) {
            wistiaPlayer.setAttribute('autoplay', 'true');
            wistiaPlayer.setAttribute('playsinline', 'true');
          }
          if (loop) {
            wistiaPlayer.setAttribute('endvideo-behavior', 'loop');
          }
          if (muted) {
            wistiaPlayer.setAttribute('muted', 'true');
            wistiaPlayer.setAttribute('volume', '0');
          }
          
          // Additional attributes for better autoplay support
          wistiaPlayer.setAttribute('silent-autoplay', 'true');
          wistiaPlayer.setAttribute('play-button', 'false');
          wistiaPlayer.setAttribute('controls', 'false');
          
          containerRef.current.appendChild(wistiaPlayer);
          playerRef.current = wistiaPlayer;
        }

        // Wait for player to be defined
        await new Promise((resolve) => {
          const checkInterval = setInterval(() => {
            if (window.customElements && window.customElements.get('wistia-player')) {
              clearInterval(checkInterval);
              resolve(true);
            }
          }, 100);

          // Timeout after 10 seconds
          setTimeout(() => {
            clearInterval(checkInterval);
            resolve(false);
          }, 10000);
        });

        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load Wistia video:', err);
        setError('Failed to load video');
        setIsLoading(false);
      }
    };

    loadWistiaScripts();

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      if (scriptEmbed) {
        scriptEmbed.remove();
      }
    };
  }, [mediaId, aspectRatio, autoPlay, loop, muted]);

  const toggleMute = () => {
    if (playerRef.current) {
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      
      // Update player attributes
      if (newMuteState) {
        playerRef.current.setAttribute('muted', 'true');
        playerRef.current.setAttribute('volume', '0');
      } else {
        playerRef.current.removeAttribute('muted');
        playerRef.current.setAttribute('volume', '1');
      }
    }
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-muted rounded-lg ${className}`}>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative group ${className}`}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      )}
      <div ref={containerRef} className="w-full h-full rounded-lg overflow-hidden" />
      
      {/* Mute/Unmute Button */}
      <Button
        onClick={toggleMute}
        size="icon"
        variant="secondary"
        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm hover:bg-background/90"
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>
    </motion.div>
  );
};

export default WistiaVideo;