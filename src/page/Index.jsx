import { ChevronDown } from 'lucide-react'
import cover2 from '../assets/foto/cover2.jpeg'
import pria from '../assets/foto/pria.jpeg'
import wanita from '../assets/foto/wanita.jpeg'
import pose1 from '../assets/foto/pose1.jpeg'
import pose2 from '../assets/foto/pose2.jpeg'
import pose3 from '../assets/foto/pose3.jpeg'
import pose4 from '../assets/foto/pose4.jpeg'
import pose5 from '../assets/foto/pose5.JPG'
import pose6 from '../assets/foto/pose6.jpeg'
import pose7 from '../assets/foto/pose7.jpeg'
import pose8 from '../assets/foto/pose8.jpeg'
import { useEffect, useState, useRef } from 'react'
import { useParams } from "react-router-dom";
import MusicPlayer from '../components/MusicPlayer'
import Aos from 'aos'

function Index() {

    const targetDate = new Date("2025-06-23T08:00:00");
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const { nama } = useParams();
    const namaTamu = nama ? formatNamaFromSlug(nama) : "Tamu Undangan";
    const scrollTargetRef = useRef(null);
    const [invitationOpened, setInvitationOpened] = useState(false);


    const scrollToContent = () => {
        scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const handleOpenInvitation = () => {
        setInvitationOpened(true);
        const audio = document.getElementById("wedding-music");
        if (audio) audio.play();
    };



    function formatNamaFromSlug(slug) {
        return slug
            .split("-")
            .map(kata => kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase())
            .join(" ");
    }


    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Nomor rekening berhasil disalin!');
            })
            .catch(err => {
                alert('Gagal menyalin nomor rekening.');
                console.error('Copy failed:', err);
            });
    };


    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });

    }, [])


    useEffect(() => {
        if (!invitationOpened) {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [invitationOpened]);




    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const distance = targetDate - now;

            const safeTime = Math.max(distance, 0);

            const days = Math.floor(safeTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((safeTime / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((safeTime / (1000 * 60)) % 60);
            const seconds = Math.floor((safeTime / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!invitationOpened) {
            window.scrollTo(0, 0);
        }
    }, [invitationOpened]);

    return (
        <div className={`flex flex-col items-center bg-slate-400 w-screen min-h-screen ${!invitationOpened ? 'fixed top-0 left-0 min-h-dvh overflow-hidden' : ''
            }`}>
            <div className="relative max-w-[430px] h-full h-full bg-white flex flex-col gap-6">
                <MusicPlayer invitationOpened={invitationOpened} />
                <section
                    className="relative h-dvh w-full bg-cover bg-center bg-no-repeat flex flex-col items-center"
                    style={{
                        backgroundImage: `url(${cover2})`,
                    }}
                >
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/60 to-transparent z-10"></div>

                    <div className="flex flex-col items-center justify-between h-full">
                        <div className="relative z-20 flex flex-col items-center pt-20" data-aos="fade-up"
                            data-aos-duration="750" >
                            <span className="font-lora text-xs text-yellow-600">the wedding of</span>
                            <h1 className="font-great-vibes font-semibold text-5xl mt-2 text-yellow-600">Audrie & Ponang</h1>
                            <span className="font-lora text-xs text-yellow-600 text-yellow-600">23 - 24 Juni 2025</span>
                        </div>

                        <div className="flex flex-col items-center px-8 py-2 bg-black/20 backdrop-blur text-white rounded-xl overflow-hidden border z-30 mt-60">
                            <span className='text-xs font-lora font-medium'>Kepada Yth,</span>
                            <span className='text-xs font-lora font-medium'>Bapak/Ibu/Saudara/i:</span>
                            <span className='text-lg text-yellow-200 font-lora font-bold mt-3 mb-2'>{namaTamu}</span>
                        </div>

                        {
                            !invitationOpened ? (
                                <button
                                    onClick={handleOpenInvitation}
                                    className="bg-yellow-600 text-white font-lora px-3 py-2 rounded-xl text-sm mb-14 z-10">
                                    Open Invitation
                                </button>
                            ) : (
                                <button
                                    onClick={scrollToContent}
                                    className='animate-bounce p-3 rounded-full border z-10 text-white mb-8 scale-[.8]'>
                                    <ChevronDown />
                                </button>
                            )
                        }
                    </div>

                </section>

                <section ref={scrollTargetRef} className='flex flex-col items-center h-max py-8 gap-4 p-4'>
                    <div className="flex flex-col" data-aos="fade-up"
                        data-aos-duration="800" >
                        <span className='font-sm text-3xl font-bold font-great-vibes text-center text-yellow-600'>Bismillahirrahmanirrahim</span>
                        <h2 className='text-xs text-center font-lora'>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan anak kami :</h2>
                    </div>
                    <div className="flex self-start gap-2 mt-4">
                        <div className="flex flex-col gap-2" data-aos="fade-right"
                            data-aos-duration="800">
                            <h3 className='font-lora font-medium text-xs '>Mempelai Wanita</h3>
                            <span className='font-great-vibes text-2xl font-semibold text-yellow-600'>Rr. Audrie Fransiska</span>
                            <span className='font-lora text-xs'>Putri Bapak Sukar - Ibu Ngatirah, Bapak Karyo Emban (Alm) - Ibu Sinah (Almh)</span>
                            <span className='font-lora text-xs'>Alamat: Pule RT. 01 RW. 03, Jatipurno</span>
                        </div>
                        <img src={wanita} className='w-56 h-36 rounded-xl object-cover' alt="" />
                    </div>
                    <span className='font-bold font-lora text-3xl'>&</span>
                    <div className="flex self-start gap-3">
                        <img src={pria} className='w-36 h-36 rounded-xl object-cover' alt="" />
                        <div className="flex flex-col gap-2" data-aos="fade-left"
                            data-aos-duration="800">
                            <h3 className='font-lora font-medium text-xs'>Mempelai Pria</h3>
                            <span className='font-great-vibes text-2xl font-semibold text-yellow-600'>Bg. Ponang Saputro Aji</span>
                            <span className='font-lora text-xs'>Putra Bapak Sutar & Ibu Pariyem </span>
                            <span className='font-lora text-xs'>Alamat: Kandenan RT. 04 RW. 04, Jatipurno</span>
                        </div>
                    </div>
                </section>


                <section className='flex flex-col items-center mt-8 gap-6 bg-yellow-600 py-8'>
                    <div className="flex flex-col items-center" data-aos="fade-up"
                        data-aos-duration="800">
                        <h2 className='font-great-vibes text-3xl font-bold text-white'>Waktu Acara</h2>
                        <span className='font-lora text-xs text-white'>23-24 Juni 2025</span>
                    </div>
                    <div className="flex gap-4" data-aos="fade-up"
                        data-aos-duration="800">
                        {/* <div className="flex flex-col items-center p-3">
                            <span className='text-xl font-great-vibes text-white font-semibold'>Akad Nikah</span>
                            <span className='text-xs font-lora text-white'>Selasa, 23 Juni 2025</span>
                            <span className='text-sm font-lora font-bold text-white'>14:00 WIB - Selesai</span>
                        </div> */}
                        <div className="flex flex-col items-center p-3">
                            <span className='text-xl font-great-vibes text-white font-semibold'>Akad & Resepsi</span>
                            <span className='text-xs font-lora text-white'>Rabu, 24 Juni 2025</span>
                            {/* <span className='text-sm font-lora font-bold text-white'>08:00 WIB - selesai </span> */}
                        </div>
                    </div>

                    <div className="flex flex-col items-center" data-aos="fade-up"
                        data-aos-duration="800">
                        <h2 className='font-lora text-xs font-bold text-white'>Kediaman Mempelai Wanita</h2>
                        <a href='https://maps.app.goo.gl/9tsxxmtWE4n5Y3oy9' className='font-lora text-xs text-white text-center hover:cursor-pointer'>Pule RT. 01 RW. 03, Jatipurno</a>
                    </div>

                    <div className="flex gap-2 items-center" data-aos="fade-up"
                        data-aos-duration="800">
                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.days}</span>
                            <span className='text-xs text-white font-lora'>Hari</span>
                        </div>
                        <span className='font-lora text-white font-bold text-2xl mb-5add'>:</span>
                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.hours}</span>
                            <span className='text-xs text-white font-lora'>Jam</span>
                        </div>
                        <span className='font-lora text-white font-bold text-2xl mb-5add'>:</span>
                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.minutes}</span>
                            <span className='text-xs text-white font-lora'>Menit</span>
                        </div>
                        <span className='font-lora text-white font-bold text-2xl mb-5add'>:</span>

                        <div className="flex gap-1 flex-col items-center">
                            <span className="py-2 px-3 text-sm font-medium bg-white rounded-md text-yellow-600 font-lora ">{timeLeft.seconds}</span>
                            <span className='text-xs text-white font-lora'>Detik</span>
                        </div>
                    </div>
                </section>

                <section className='flex flex-col items-center mt-6 p-4 gap-6' data-aos="fade-right"
                    data-aos-duration="800">
                    <div className="flex flex-col" >
                        <h2 className='font-great-vibes text-3xl font-bold text-yellow-600'>Maps</h2>
                    </div>
                    <iframe
                        className='w-full h-80 rounded-2xl'
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3801.8225475128615!2d111.12851144219397!3d-7.808899503697368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDgnMzUuNiJTIDExMcKwMDcnNDguMCJF!5e0!3m2!1sid!2sid!4v1747532074017!5m2!1sid!2sid"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    ></iframe>
                    <a href="https://maps.app.goo.gl/9tsxxmtWE4n5Y3oy9" className='text-sm underline text-yellow-600'>Ke Google Maps</a>
                </section>

                <section className='flex flex-col items-center p-4 gap-4'>
                    <h2 className='font-great-vibes text-3xl font-bold text-yellow-600' data-aos="fade-up"
                        data-aos-duration="800">Galeri</h2>
                    <div className="grid grid-cols-2 gap-2 auto-rows-[150px]">
                        <img src={pose3} alt='Galeri 1' className='w-full h-full object-cover rounded-xl col-span-2 row-span-2' data-aos="fade-up"
                            data-aos-duration="800" />
                        <img src={pose2} alt='Galeri 2' className='w-full h-full object-cover rounded-xl row-span-2' data-aos="fade-right"
                            data-aos-duration="800" />
                        <img src={pose8} alt='Galeri 3' className='w-full h-full object-cover rounded-xl row-span-1' data-aos="fade-left"
                            data-aos-duration="800" />
                        <img src={pose4} alt='Galeri 4' className='w-full h-full object-cover rounded-xl row-span-2' data-aos="fade-left"
                            data-aos-duration="800" />
                        <img src={pose5} alt='Galeri 5' className='w-full h-full object-cover rounded-xl row-span-1' data-aos="fade-right"
                            data-aos-duration="800" />
                        <img src={pose6} alt='Galeri 6' className='w-full h-full object-cover rounded-xl row-span-2'
                            data-aos="fade-right"
                            data-aos-duration="800" />
                        <img src={pose7} alt='Galeri 7' className='w-full h-full object-cover rounded-xl row-span-1' data-aos="fade-left"
                            data-aos-duration="800" />
                        <img src={pose1} alt='Galeri 8' className='w-full h-full object-cover rounded-xl row-span-1' data-aos="fade-left"
                            data-aos-duration="800" />
                    </div>
                </section>


                <section className='flex flex-col p-4 items-center gap-4 mt-4 bg-yellow-600'>

                    <p className='text-xs font-lora italic text-center text-white' data-aos="fade-up"
                        data-aos-duration="800">
                        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
                    </p>
                    <span className='text-xs font-lora font-medium text-white' data-aos="fade-up"
                        data-aos-duration="800">Q.S Ar Rum 21</span>
                </section>

                <section className="flex flex-col items-center py-8 gap-4 p-4 bg-white">
                    <h2 className="font-great-vibes text-3xl text-yellow-600 font-bold" data-aos="fade-up">Kado Pernikahan</h2>
                    <p className="text-xs font-lora text-center text-gray-700" data-aos="fade-up">
                        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
                        Namun jika memberi adalah bentuk tanda kasih, kami menyediakan informasi berikut:
                    </p>

                    <div className="flex flex-col items-center gap-2 border p-4 rounded-xl shadow-md w-full max-w-xs bg-slate-100" data-aos="fade-up">
                        <span className="font-lora text-sm text-gray-700">BCA - AUDRIE FRANSISKA</span>
                        <span className="font-lora font-bold text-lg text-yellow-700">3271209604</span>
                        <button
                            onClick={() => handleCopy('3271209604')}
                            className="bg-yellow-600 text-white text-xs px-3 py-1 rounded-md hover:bg-yellow-700"
                        >
                            Salin No Rekening
                        </button>
                    </div>


                    <div className="flex flex-col items-center gap-2 border p-4 rounded-xl shadow-md w-full max-w-xs bg-slate-100" data-aos="fade-up">
                        <span className="font-lora text-sm text-gray-700">BRI - PONANG SAPUTRO AJI</span>
                        <span className="font-lora font-bold text-lg text-yellow-700">694701005370507</span>
                        <button
                            onClick={() => handleCopy('694701005370507')}
                            className="bg-yellow-600 text-white text-xs px-3 py-1 rounded-md hover:bg-yellow-700"
                        >
                            Salin No Rekening
                        </button>
                    </div>
                </section>


                <section className='flex flex-col items-center gap-4 p-6 bg-white'>
                    <h2 className='font-great-vibes text-3xl font-bold text-yellow-600' data-aos="fade-up"
                        data-aos-duration="800">Terima Kasih</h2>
                    <p className='text-xs font-lora text-center text-gray-600' data-aos="fade-up"
                        data-aos-duration="800">
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                        berkenan hadir dan memberikan doa restu kepada kami.
                    </p>
                    <p className='text-xs font-lora text-center text-gray-600' data-aos="fade-up"
                        data-aos-duration="800">
                        Atas kehadiran dan doa restunya, kami mengucapkan terima kasih yang sebesar-besarnya.
                    </p>
                </section>
                <footer className="bg-black text-white text-center py-4 mt-10">
                    <p className="text-xs font-lora">
                        Ulemin.id — Powered by AdhLabs X D'Love
                    </p>
                </footer>

            </div >
        </div >
    )
}

export default Index
