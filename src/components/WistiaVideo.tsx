import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface WistiaVideoProps {
  mediaId: string;
  aspectRatio?: string;
  className?: string;
}

const WistiaVideo = ({ mediaId, aspectRatio = '0.5625', className = '' }: WistiaVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          containerRef.current.appendChild(wistiaPlayer);
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
  }, [mediaId, aspectRatio]);

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
      className={`relative ${className}`}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
      )}
      <div ref={containerRef} className="w-full h-full rounded-lg overflow-hidden" />
    </motion.div>
  );
};

export default WistiaVideo;