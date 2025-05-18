import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import Music from "../assets/music/music.mp3"

export default function MusicPlayer() {
    const audioRef = useRef(null)
    const [isMuted, setIsMuted] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const audio = audioRef.current

        if (!audio) return


        const handleVisibilityChange = () => {
            if (document.hidden) {
                audio.pause()
            } else {
                if (!isMuted && isPlaying) {
                    audio.play().catch((e) => console.log("Autoplay error:", e))
                }
            }
        }

        document.addEventListener("visibilitychange", handleVisibilityChange)
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange)
        }
    }, [isMuted, isPlaying])

    const toggleMute = () => {
        const audio = audioRef.current
        if (!audio) return

        if (!isPlaying) {

            audio.play().catch((e) => console.log("Play error:", e))
            setIsPlaying(true)
        }

        const newMuted = !audio.muted
        audio.muted = newMuted
        setIsMuted(newMuted)
    }

    return (
        <div className="fixed bottom-4 right-4 flex items-center space-x-2 z-20">
            <audio ref={audioRef} src={Music} loop muted={true} />
            <button
                onClick={toggleMute}
                className="bg-yellow-800 p-2 rounded-full shadow text-white"
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
        </div>
    )
}
