import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';
import { PlayIcon, PauseIcon } from './icons/AudioIcons';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isIdlePulsing, setIsIdlePulsing] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Autoplay was prevented: ", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const idleInterval = setInterval(() => {
      setIsIdlePulsing(true);
      setTimeout(() => {
        setIsIdlePulsing(false);
      }, 1000); // Animation duration
    }, 3000); // Repeat every 5 seconds

    return () => clearInterval(idleInterval);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src="/bg-atmo.mp3" loop style={{ display: 'none' }} />
      <button onClick={togglePlayPause} className={`control-button ${isPlaying ? 'playing' : ''} ${isIdlePulsing ? 'idle-pulse' : ''}`}>
        <span className="play-icon-wrapper">
          <PlayIcon />
        </span>
        <span className="pause-icon-wrapper">
          <PauseIcon />
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;
