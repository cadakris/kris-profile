import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/Footer'
import Projects from '../src/components/Projects'
import Header from '../src/components/Header'
import Skills from '../src/components/Skills'
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import './styles/app.scss'

function App() {
  return (
  <>

    <div className="mainContainer">
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  </>
  );
}

export default App;
