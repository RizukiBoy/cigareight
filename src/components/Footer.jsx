import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';


export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }


    return(
        <div className="bg-white my-10 md:p-10">
            <h1 className="text-center font-bold text-4xl md:p-10">Let's Connect With Us</h1>

            <div className="flex justify-around">
                <h1 className="text-gray-800 w-max font-semibold text-xl border border-gray-800 p-2 rounded-md">Unimma.ac.id</h1>
                <h1 className="text-white w-max font-semibold text-xl bg-gray-800 p-2 rounded-md">Get A Quote</h1>
                <h1 className="text-gray-800 w-max font-extrabold underline">+62 858 381 828 48</h1>



            </div>

        </div>
    )
}