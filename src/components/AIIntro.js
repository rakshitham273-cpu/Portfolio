import { useEffect, useMemo, useState } from 'react';
import './AIIntro.css';

// The text the AI avatar will speak when the page loads.
const INTRO_TEXT =
  'Hello, welcome to my portfolio. I am Rakshitha, a passionate developer interested in AI, software development, and modern technologies. Explore my projects, certifications, and technical skills through this interactive portfolio.';

// Choose a suitable English voice if available.
function pickVoice(voices) {
  const femaleKeywords = ['female', 'woman', 'girl', 'samantha', 'victoria', 'zira', 'audrey', 'alloy', 'karen', 'callie', 'aria'];
  const femaleVoices = voices.filter((voice) => {
    const lowerName = voice.name.toLowerCase();
    const lowerURI = (voice.voiceURI || '').toLowerCase();
    return femaleKeywords.some((keyword) => lowerName.includes(keyword) || lowerURI.includes(keyword));
  });
  const englishFemaleVoice = femaleVoices.find((voice) => voice.lang.startsWith('en'));
  return englishFemaleVoice || femaleVoices[0] || null;
}

export default function AIIntro() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [voiceName, setVoiceName] = useState('');
  const [hasSpoken, setHasSpoken] = useState(false);

  const utterance = useMemo(() => {
    if (typeof window === 'undefined' || !window.SpeechSynthesisUtterance) return null;
    const utter = new window.SpeechSynthesisUtterance(INTRO_TEXT);
    utter.rate = 1;
    utter.pitch = 1;
    utter.volume = 1;
    return utter;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSpeechSupported(false);
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const voice = pickVoice(voices);
      if (voice) {
        setVoiceName(voice.name);
        if (utterance) utterance.voice = voice;
        setSpeechSupported(true);
      } else if (voices.length > 0) {
        setSpeechSupported(false);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (window.speechSynthesis.onvoiceschanged === loadVoices) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [utterance]);

  useEffect(() => {
    if (!speechSupported || !utterance) return;

    // Update component state while speech is playing.
    const handleStart = () => setIsSpeaking(true);
    const handleEnd = () => {
      setIsSpeaking(false);
      setHasSpoken(true);
    };

    utterance.onstart = handleStart;
    utterance.onend = handleEnd;

    if (!hasSpoken) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }

    return () => {
      utterance.onstart = null;
      utterance.onend = null;
    };
  }, [hasSpoken, speechSupported, utterance]);

  // Replay the introduction when the visitor clicks the button.
  const handleReplay = () => {
    if (!speechSupported || !utterance) return;
    window.speechSynthesis.cancel();
    setHasSpoken(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="ai-intro-section flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-16 px-6">
      {/* Avatar Container with 3D Ring */}
      <div className={`avatar-container relative ${isSpeaking ? 'is-speaking' : ''}`}>
        <div className="ring-glow-purple"></div>
        <div className="ring-glow-blue"></div>
        
        <div className="avatar-frame animate-float">
          <div className="avatar-inner">
            <div className="avatar-container"></div>
            <img 
              src="/ai-girl.jpg"
              alt="AI Girl Assistant" 
              className="ai-avatar-image"
            />
          </div>
        </div>
      </div>

      {/* Communication Side */}
      <div className="assistant-comms flex flex-col items-center lg:items-start max-w-lg">
        <div className="speech-bubble-premium glass-morph animate-entrance">
          <div className="bubble-content">
            Hello! 👋<br />
            I'm Rakshitha's AI Assistant.<br />
            Let me introduce her to you.
          </div>
          
          {/* Animated Voice Wave inside Bubble */}
          <div className={`purple-wave ${isSpeaking ? 'visible' : ''}`}>
            <div className="wave-pillar"></div>
            <div className="wave-pillar"></div>
            <div className="wave-pillar"></div>
            <div className="wave-pillar"></div>
            <div className="wave-pillar"></div>
          </div>
          
          <div className="bubble-arrow"></div>
        </div>
        
        <button
          className="replay-action-btn"
          onClick={handleReplay}
          disabled={!speechSupported || isSpeaking}
        >
          <span className="pulse-dot"></span>
          {isSpeaking ? 'Assistant Speaking...' : 'Replay Introduction'}
        </button>
      </div>
    </div>
  );
}
