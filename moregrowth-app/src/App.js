import './App.css';
import LandingPage from './modules/LandingPage/LandingPage' ;
import FirstDetailsSection from './modules/FirstDetailsSection/FirstDetailsSection';
import SecondDetailsSection from './modules/SecondDetailsSection/SecondDetailsSection';
import PricingSection from './modules/PricingSection/PricingSection';
import Navbar from './modules/Navbar/Navbar';
import Footer from './modules/Footer/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <div className="AppContent">
          <LandingPage/>
          <FirstDetailsSection/>
          <SecondDetailsSection/>
          <PricingSection/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
