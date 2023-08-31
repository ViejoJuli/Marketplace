import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/navigation/Navbar.js';
import Footer from '../components/navigation/Footer.js';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <ToastContainer />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;