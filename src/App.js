import "./App.css";
import "./style/LandingPage.css";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end off intro */}

      {/* Trending section */}
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
