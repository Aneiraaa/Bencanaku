import Navbar from "@/components/navigation/Navbar";
import Jumbotron from "@/components/section/Jumbotron";
import Information from "@/components/section/Information";
import AboutUs from "@/components/section/AboutUs";
import Footer from "@/components/section/Footer";
import Gallery from "@/components/section/Gallery";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Jumbotron/>
      <Information  />
      <AboutUs/>
      <Gallery/>
      <Footer/>
    </>
    );
}