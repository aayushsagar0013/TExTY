import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import temp from './componets/temp';
import About from './componets/About';

function App() {
  return (
   <div className="blank">
     
<Navbar title="TExTY" aboutText="About"/>

<div className="container">
<TextForm heading="Text Editor" color="black"/> 
  
</div>
  
   </div>
  );
}

export default App;
