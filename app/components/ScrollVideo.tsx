"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4";
const POSTER_URL = "/hero-poster.jpg"; // Assuming local or just load empty if not exists

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isPosterVisible, setIsPosterVisible] = useState(true);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  // Animation state refs to avoid dependency loops
  const state = useRef({
    frames: [] as ImageBitmap[],
    duration: 0,
    targetProgress: 0,
    smoothedProgress: 0,
    extractionDone: false,
    width: 0,
    height: 0,
    animationFrameId: 0,
  });

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const innerHeight = window.innerHeight;
      
      const maxScroll = Math.max(scrollHeight - innerHeight, 1);
      let progress = scrollY / maxScroll;
      // Clamp
      progress = Math.max(0, Math.min(1, progress));
      state.current.targetProgress = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // init

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Frame Extraction
  useEffect(() => {
    const extractFrames = async () => {
      if (!videoRef.current) return;
      const vid = videoRef.current;
      
      if (vid.readyState < 2) {
        // Wait for loadeddata
        await new Promise((res) => vid.addEventListener("loadeddata", res, { once: true }));
      }
      
      // Wait 300ms as requested
      await new Promise((res) => setTimeout(res, 300));
      setIsPosterVisible(false); // Can hide poster now that video has a frame

      state.current.duration = vid.duration || 5;
      const duration = state.current.duration;
      
      // Max 90 frames or duration * 12, min 24
      const frameCount = Math.max(24, Math.min(90, Math.floor(duration * 12)));
      const interval = duration / frameCount;

      // Offscreen video for extraction
      const offscreenVid = document.createElement("video");
      offscreenVid.crossOrigin = "anonymous";
      offscreenVid.src = VIDEO_URL;
      offscreenVid.muted = true;
      offscreenVid.playsInline = true;
      offscreenVid.preload = "auto";
      
      await new Promise((res) => offscreenVid.addEventListener("loadeddata", res, { once: true }));

      // Setup canvas for downscaling (max width 960px)
      const extractCanvas = document.createElement("canvas");
      const ctx = extractCanvas.getContext("2d");
      
      const aspect = offscreenVid.videoWidth / offscreenVid.videoHeight;
      const targetWidth = Math.min(960, offscreenVid.videoWidth);
      const targetHeight = targetWidth / aspect;
      
      extractCanvas.width = targetWidth;
      extractCanvas.height = targetHeight;

      if (!ctx) return;

      const frames: ImageBitmap[] = [];
      
      for (let i = 0; i <= frameCount; i++) {
        const time = Math.min(i * interval, duration - 0.05);
        offscreenVid.currentTime = time;
        
        await new Promise((res) => {
          const onSeeked = () => {
            offscreenVid.removeEventListener("seeked", onSeeked);
            res(null);
          };
          offscreenVid.addEventListener("seeked", onSeeked);
        });

        ctx.drawImage(offscreenVid, 0, 0, targetWidth, targetHeight);
        const bitmap = await createImageBitmap(extractCanvas);
        frames.push(bitmap);
      }

      state.current.frames = frames;
      state.current.extractionDone = true;
      setIsCanvasReady(true);
    };

    extractFrames().catch(console.error);
  }, []);

  // Render Loop
  useEffect(() => {
    const loop = () => {
      const s = state.current;
      
      // Lerp
      s.smoothedProgress += (s.targetProgress - s.smoothedProgress) * 0.12;

      // Draw
      if (s.extractionDone && canvasRef.current && s.frames.length > 0) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        // Resize canvas if needed
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        
        if (s.width !== rect.width || s.height !== rect.height) {
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          s.width = rect.width;
          s.height = rect.height;
        }

        if (ctx) {
          const frameIndex = Math.min(
            s.frames.length - 1,
            Math.max(0, Math.floor(s.smoothedProgress * (s.frames.length - 1)))
          );
          
          const frame = s.frames[frameIndex];
          if (frame) {
            // Object-cover math
            const canvasRatio = canvas.width / canvas.height;
            const frameRatio = frame.width / frame.height;
            
            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
            let drawX = 0;
            let drawY = 0;

            if (canvasRatio > frameRatio) {
              drawHeight = canvas.width / frameRatio;
              drawY = (canvas.height - drawHeight) / 2;
            } else {
              drawWidth = canvas.height * frameRatio;
              drawX = (canvas.width - drawWidth) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(frame, drawX, drawY, drawWidth, drawHeight);
          }
        }
      } else if (!s.extractionDone && videoRef.current && s.duration > 0) {
        // Fallback: Seek video
        const targetTime = s.smoothedProgress * (s.duration - 0.05);
        const delta = Math.abs(videoRef.current.currentTime - targetTime);
        if (delta > 0.04) {
          videoRef.current.currentTime = targetTime;
        }
      }

      s.animationFrameId = requestAnimationFrame(loop);
    };

    state.current.animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(state.current.animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0a0a]"
    >
      {/* 1. Poster */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 bg-[#0a0a0a] ${
          isPosterVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 2. Video fallback */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isCanvasReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 3. Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isCanvasReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
