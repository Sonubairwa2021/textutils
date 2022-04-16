import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" /> */}
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        <TextForm heading="Enter Text Here"/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
