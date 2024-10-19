import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
function Layout({children}){
    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;