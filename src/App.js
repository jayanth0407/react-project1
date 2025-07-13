import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextFrom from './componets/TextFrom';

function App() {
  return (
   <> 
<Navbar titile="Texutils" Home="Home" about="About" />
<div className='container my-3' >
  <TextFrom heading="Enter a Word" />
</div>

   </>
  );
}

export default App;
