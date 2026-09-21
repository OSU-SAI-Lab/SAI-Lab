import Hero from "./Hero";
import HomePreviews from "./HomePreviews";
import LatestNews from "../LatestNews/LatestNews.jsx";
import Footer from "../Footer.jsx";

function HomePage() {

    return(
        <>
        <Hero />
        <HomePreviews />
        <LatestNews/>
        <Footer/>
        </>
    );
}

export default HomePage;
