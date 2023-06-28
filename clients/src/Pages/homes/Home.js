import "./home.css"
import Navbar from "../../Component/Navbar";
import Header from "../../Component/Header";
import Features from "../../Component/Features";
import Propertylist from "../../Component/Propertylist";
import Homelist from "../../Component/Homelist/Homelist";
import Maillist from "../../Component/maillist/Maillist";
import Footer from "../../Component/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Features />
            <Propertylist />
            <Homelist />
            <Maillist />
            <Footer />
        </div>
    )
}

export default Home