import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const MainPageLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainPageLayout;