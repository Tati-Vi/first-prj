import "./App.css";
import Header from "./components/Header";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
