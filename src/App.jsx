import './App.css';
import Hero from '../src/component/hero/Hero'
import About from '../src/component/about/About'
import Skill from '../src/component/skills/Skill'
import Project from '../src/component/projects/Project'
import Contact from '../src/component/contact/Contact'
import Footer from '../src/component/footer/Footer'
function App() {
  return (
    <div className="App">
        < Hero/>
        < About />
        < Skill/>
        < Project/>
        < Contact/>
        < Footer/>
    </div>
  );
}

export default App;
