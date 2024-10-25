import { BiSolidVolumeFull } from "react-icons/bi";

function VoiceSpeaking({ plainText }) {
  function handleAudioPlayback(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech synthesis not supported");
    }
  }

  return (
    <BiSolidVolumeFull
      size={22}
      className="text-gray-400"
      onClick={() => {
        handleAudioPlayback(plainText);
      }}
    />
  );
}

export default VoiceSpeaking;
