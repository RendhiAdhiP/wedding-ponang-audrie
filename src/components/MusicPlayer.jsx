import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Music from "../assets/music/music.mp3";

export default function MusicPlayer({ invitationOpened }) {
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !invitationOpened) return;


        audio.loop = true;
        audio.muted = false;
        setIsMuted(false);

        audio
            .play()
            .then(() => {
                setIsPlaying(true);
                setShowOverlay(false);
            })
            .catch((err) => {
                console.log("Gagal autoplay:", err);

            });
    }, [invitationOpened]);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        const newMuted = !audio.muted;
        audio.muted = newMuted;
        setIsMuted(newMuted);

        if (!isPlaying && !newMuted) {
            audio.play().then(() => setIsPlaying(true));
        }
    };

    return (
        <>
            {invitationOpened && showOverlay && (
                <div
                    className="fixed inset-0 z-50"
                    style={{ backgroundColor: "transparent" }}
                />
            )}

            {invitationOpened && (
                <div className="fixed bottom-4 right-4 z-40">
                    <audio ref={audioRef} src={Music} preload="auto" />
                    <button
                        onClick={toggleMute}
                        className="bg-yellow-800 hover:bg-yellow-700 transition-colors p-2 rounded-full shadow text-white"
                        title={isMuted ? "Nyalakan Musik" : "Matikan Musik"}
                        aria-label={isMuted ? "Nyalakan Musik" : "Matikan Musik"}
                    >
                        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                </div>
            )}
        </>
    );
}
