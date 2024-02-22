import Navbar from './Navbar';
import Footer from './Footer';



export default function Layout({children, showFooter }) {
    return(
        <div className="bg-gray-800">
            <Navbar />

            {children}

            {showFooter && <Footer />}
        </div>
    )
}