import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline.tsx";
import Hero from "./components/Hero.tsx";
import ScholarProjects from "./components/ScholarProjects.tsx";

function App() {

    return (
        <div className="min-h-screen bg-base-200">
            <Navbar/>
            <Hero/>
            <Timeline/>
            <ScholarProjects/>
            <Footer/>
        </div>
    );
}

export default App