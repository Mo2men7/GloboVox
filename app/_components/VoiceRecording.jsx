"use client";

import "regenerator-runtime/runtime";
import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiSolidMicrophone } from "react-icons/bi";

function VoiceRecording({ setPlainText }) {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setPlainText(transcript);
  }, [transcript, setPlainText]);

  function handleVoiceRecording() {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  }

  return (
    <BiSolidMicrophone
      size={22}
      className="text-gray-400"
      onClick={handleVoiceRecording}
    />
  );
}

export default VoiceRecording;
