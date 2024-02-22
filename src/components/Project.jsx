 

export default function Project() {
    return(
        <div className="flex">
            <div className="h-screen bg-gray-800 md:w-52 md:fixed shadow-xl">
            <div className="hidden md:block p-5">
                <h1 className="text-white text-xl font-semibold">CigarEight</h1>
                <ul className="mt-5">
                    <li className="text-white p-2 hover:bg-gray-700 cursor-pointer">Menu 1</li>
                    <li className="text-white p-2 hover:bg-gray-700 cursor-pointer">Menu 2</li>
                    <li className="text-white p-2 hover:bg-gray-700 cursor-pointer">Menu 3</li>
                    <li className="text-white p-2 hover:bg-gray-700 cursor-pointer">Menu 4</li>
                    <li className="text-white p-2 hover:bg-gray-700 cursor-pointer">Menu 5</li>
                </ul>
            </div>
            </div>

            <div className="bg-gray-300 rounded-md md:ml-52 p-5"> {/* Adjust the left margin according to the width of your sidebar */}
                <h1 className="text-2xl font-semibold">Project Overview</h1>
                <div className="flex flex-row gap-8 mt-10 flex-wrap justify-center">
                    <div className="w-80 h-72 bg-teal-500 rounded-md">
                        <div className="absolute bg-slate-100 w-80 h-20 place-items-baseline">Testing</div>

                    </div>
                    <div className="w-80 h-72 bg-teal-500 rounded-md"></div>
                    <div className="w-80 h-72 bg-teal-500 rounded-md"></div>
                    <div className="w-80 h-72 bg-teal-500 rounded-md"></div>
                    <div className="w-80 h-72 bg-teal-500 rounded-md"></div>


                </div>
            </div>
        </div>
    )
}