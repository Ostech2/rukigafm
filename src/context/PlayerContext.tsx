import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { stationConfig, officialProgrammes } from '../config/stationConfig';
import { PodcastEpisode } from '../types';

export type AudioSourceType = 'live' | 'podcast' | 'sample';

interface PlayerContextType {
  isPlaying: boolean;
  isBuffering: boolean;
  volume: number;
  isMuted: boolean;
  streamStatus: 'idle' | 'connecting' | 'live' | 'error' | 'not-configured';
  statusMessage: string;
  currentTitle: string;
  currentSubtitle: string;
  currentArtwork: string;
  sourceType: AudioSourceType;
  audioRef: React.RefObject<HTMLAudioElement>;
  playLiveStream: () => void;
  playPodcast: (podcast: PodcastEpisode) => void;
  playSampleBroadcast: () => void;
  togglePlay: () => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  dismissStatus: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [volume, setVolumeState] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [streamStatus, setStreamStatus] = useState<'idle' | 'connecting' | 'live' | 'error' | 'not-configured'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  
  // Default to the flagship Morning show ORUUME PROGRAM
  const currentLiveShow = officialProgrammes[0];
  const [currentTitle, setCurrentTitle] = useState(currentLiveShow.title);
  const [currentSubtitle, setCurrentSubtitle] = useState(`${currentLiveShow.presenter} • Monday - Friday`);
  const [currentArtwork, setCurrentArtwork] = useState('/images/rukiga-fm-logo.png');
  const [sourceType, setSourceType] = useState<AudioSourceType>('live');

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playLiveStream = () => {
    setSourceType('live');
    setCurrentTitle(currentLiveShow.title);
    setCurrentSubtitle(`${currentLiveShow.presenter} • Monday - Friday`);
    setCurrentArtwork('/images/rukiga-fm-logo.png');

    // If station has no streaming URL configured yet
    if (!stationConfig.streamUrl || stationConfig.streamUrl.trim() === '') {
      setIsPlaying(false);
      setStreamStatus('not-configured');
      setStatusMessage('Online streaming is being configured. Please check back soon.');
      if (audioRef.current) {
        audioRef.current.pause();
      }
      return;
    }

    // If stream URL is configured, connect to it
    if (audioRef.current) {
      setStreamStatus('connecting');
      setIsBuffering(true);
      setStatusMessage('Connecting to RUKIGA FM Live Broadcast...');
      audioRef.current.src = stationConfig.streamUrl;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsBuffering(false);
          setStreamStatus('live');
          setStatusMessage('RUKIGA FM Live On Air • Streaming from rukigafm.com');
        })
        .catch((err) => {
          console.warn('Playback error:', err);
          setIsPlaying(false);
          setIsBuffering(false);
          setStreamStatus('error');
          setStatusMessage('Live stream connecting. You can also listen directly at rukigafm.com.');
        });
    }
  };

  const playPodcast = (podcast: PodcastEpisode) => {
    setSourceType('podcast');
    setCurrentTitle(podcast.title);
    setCurrentSubtitle(`${podcast.programmeName} • ${podcast.presenter}`);
    setCurrentArtwork(podcast.artwork);

    if (audioRef.current && podcast.audioUrl) {
      setStreamStatus('connecting');
      setIsBuffering(true);
      setStatusMessage(`Loading episode: ${podcast.title}...`);
      audioRef.current.src = podcast.audioUrl;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsBuffering(false);
          setStreamStatus('live');
          setStatusMessage(`Playing recorded episode: ${podcast.title}`);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsBuffering(false);
          setStreamStatus('error');
          setStatusMessage('Unable to play selected podcast episode.');
        });
    }
  };

  const playSampleBroadcast = () => {
    if (!stationConfig.testAudioFallbackUrl) return;
    setSourceType('sample');
    setCurrentTitle('RUKIGA FM Studio Audio Check');
    setCurrentSubtitle('Test Broadcast & Audio Preview');
    setCurrentArtwork('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop');

    if (audioRef.current) {
      setStreamStatus('connecting');
      setIsBuffering(true);
      setStatusMessage('Loading audio check preview...');
      audioRef.current.src = stationConfig.testAudioFallbackUrl;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsBuffering(false);
          setStreamStatus('live');
          setStatusMessage('Playing sample audio preview');
        })
        .catch(() => {
          setIsPlaying(false);
          setIsBuffering(false);
          setStreamStatus('error');
          setStatusMessage('Sample audio check could not be loaded.');
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setStreamStatus('idle');
      setStatusMessage('Audio paused');
    } else {
      if (sourceType === 'live') {
        playLiveStream();
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setStreamStatus('live');
            setStatusMessage('');
          })
          .catch(() => {
            playLiveStream();
          });
      }
    }
  };

  const setVolume = (val: number) => {
    setVolumeState(val);
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const dismissStatus = () => {
    setStatusMessage('');
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        isBuffering,
        volume,
        isMuted,
        streamStatus,
        statusMessage,
        currentTitle,
        currentSubtitle,
        currentArtwork,
        sourceType,
        audioRef,
        playLiveStream,
        playPodcast,
        playSampleBroadcast,
        togglePlay,
        setVolume,
        toggleMute,
        dismissStatus,
      }}
    >
      {children}
      {/* Underlying HTML5 Audio element */}
      <audio
        ref={audioRef}
        preload="none"
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => {
          setIsBuffering(false);
          setIsPlaying(true);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setStreamStatus('idle');
        }}
        onError={() => {
          setIsPlaying(false);
          setIsBuffering(false);
          setStreamStatus('error');
          setStatusMessage('Audio stream error or format unsupported.');
        }}
      />
    </PlayerContext.Provider>
  );
};

export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
