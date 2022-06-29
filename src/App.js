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

      {/* <h1>This is a variable example</h1>

      <div id = "nested" >
        <h3>This is a nested rules example</h3>
      </div>

      <p className="interpolation">Interpolation Example</p>

      <div id="function">
        <h3>This is a function Example</h3>
      </div>

      <div id="mixin">
        <h3>This is a mixin example</h3>
      </div> */}


<Header/>
<div className="mainContainer">
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
</div>
    </>
  );
}

export default App;
