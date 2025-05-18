

function NotFound() {
    return (
        <div className="flex justify-center">
            <div className="min-h-screen max-w-[475px] w-screen bg-yellow-800 flex flex-col items-center justify-center bg-gray-100 text-gray-800">
                <h1 className="text-6xl font-great-vibes font-bold text-white">404</h1>
                <p className="text-base mt-1 font-lora text-white">Halaman tidak ditemukan</p>
                <p className="text-gray-600 text-xs mt-2 mb-6 font-lora text-white">
                    Maaf, halaman yang kamu cari tidak tersedia.
                </p>
            </div>
        </div>
    );
}

export default NotFound;
