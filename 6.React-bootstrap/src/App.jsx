import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Packages from "./components/Packages";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <About />
        <Packages />
      </main>
    </>
  );
};

export default App;
