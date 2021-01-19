
import './App.css';
import Footer from './component/footer/footer'
import Navbarr from './component/navbar/navbar'
import MainFormm from './component/main/main'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App"> 
     
      <Navbarr/>
      <div className="APPForm">
      
      <MainFormm/>
      </div>
      <Footer/>
     
      
    </div>
  );
}

export default App;
