import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Gmail from "./components/Gmail.jsx";
import Footer from "./components/Footer.jsx";
import Takeaway from "./components/Takeaway.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <Content/>
            <About/>
            <div style={{height: "200px", width: "100%"}}></div>
            <Menu/>
            <div style={{height: "200px", width: "100%"}}></div>
            <Takeaway/>
            <div style={{height: "250px", width: "100%"}}></div>
            <Gmail/>
            <Footer/>
        </>
    )
};

export default Home;