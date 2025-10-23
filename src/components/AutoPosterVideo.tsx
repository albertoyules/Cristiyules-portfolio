import React, { useRef, useState } from "react";

type Props = {
  src: string;
  className?: string;
  fallbackPoster?: string; // por si algo falla
  muted?: boolean;
  autoPlayOnHover?: boolean;
};

const AutoPosterVideo: React.FC<Props> = ({
  src,
  className,
  fallbackPoster,
  muted = false,
  autoPlayOnHover = false,
  controls={true},
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterUrl, setPosterUrl] = useState<string | undefined>(undefined);

  const captureFrame = () => {
    const v = videoRef.current;
    if (!v || !v.videoWidth || !v.videoHeight) return;
    const canvas = document.createElement("canvas");
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
    try {
      const url = canvas.toDataURL("image/jpeg", 0.8);
      setPosterUrl(url);
    } catch {
      setPosterUrl(fallbackPoster);
    }
  };

  const onLoadedMetadata = () => {
    const v = videoRef.current!;
    // Mueve un pelín el tiempo para evitar frames negros
    try {
      v.currentTime = Math.min(0.1, (v.duration || 1) - 0.1);
    } catch {}
    const onSeeked = () => {
      captureFrame();
      v.removeEventListener("seeked", onSeeked);
    };
    v.addEventListener("seeked", onSeeked, { once: true });
  };

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      controls
      playsInline
      preload="metadata"
      muted={muted}
      poster={posterUrl ?? fallbackPoster}
      onLoadedMetadata={onLoadedMetadata}
      onMouseEnter={(e) => {
        if (autoPlayOnHover) {
          (e.currentTarget as HTMLVideoElement).play().catch(() => {});
        }
      }}
      onMouseLeave={(e) => {
        if (autoPlayOnHover) (e.currentTarget as HTMLVideoElement).pause();
      }}
      // Si usas vídeos alojados fuera (YouTube no aplica), necesitarás CORS:
      // crossOrigin="anonymous"
    />
  );
};

export default AutoPosterVideo;