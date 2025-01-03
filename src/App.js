import "./App.css";
import Header from "./components/Header";
import Miniheader from "./components/Mini_header";
import Photo from "./components/home_page_main_image";
import Data from "./components/secondwindow/data";
import FAQ from "./components/drop-down_questions";
import ContactForm from "./components/submit_form";
import DonationCompines from "./components/donation_compnies";
import ContactUsPage from "./components/contact_us";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Miniheader />
        <Photo/>
        <Data/>
        <FAQ/>
        <ContactForm/>
        <DonationCompines/>
        <ContactUsPage/>
      </div>
    </div>
  );
}

export default App;
