import test from '../assets/Japan.jpeg';



export default function Blog() {
    return(
        <>
        <div>
            <h1 className="text-white text-center font-bold text-4xl md:p-10">What's New</h1>

            <div className="flex flex-row items-center justify-center gap-8 text-white">
                <div className="w-60 h-72 border-2 rounded-md">
                    <div className="w-full p-2 h-40">
                    <img className="w-full" src={test} />
                    <h3 className="font-semibold mt-3">Bagaimana cara membuat elemen div berada ditengah halaman?</h3>
                    <p className="text-xs text-end">june 12, 2024</p>
                    </div>
                </div>
                <div className="w-60 h-72 border-2 rounded-md">
                    <div className="w-full p-2 h-40">
                    <img className="w-full" src={test} />
                    <h3 className="font-semibold mt-3">Bagaimana cara membuat elemen berada ditengah halaman?</h3>
                    <p className="text-xs text-end">june 12, 2024</p>
                    </div>
                </div>
                <div className="w-60 h-72 border-2 rounded-md">
                    <div className="w-full p-2">
                    <img className="w-full" src={test} />
                    <h3 className="font-semibold mt-3">Bagaimana cara membuat halaman?</h3>
                    <p className="text-xs text-end align-text-bottom">june 12, 2024</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}