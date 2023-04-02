import { Outlet} from "react-router-dom";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

const Layout = () => {
  return (
    <>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </>
  )
};

export default Layout;