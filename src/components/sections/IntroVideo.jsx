import introVideo from "@/assets/videos/logovid.mp4";
import "@/styles/global.css";

export default function IntroVideo({ onFinish }) {
  return (
    <div className="intro-container">
      <video autoPlay muted playsInline preload="auto" className="intro-video" onEnded={onFinish}>
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
}
