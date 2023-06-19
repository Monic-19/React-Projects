import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <div className='bg-secondary py-3'> 
      <Navbar></Navbar>
      <News></News>
    </div>
  );
}

export default App;
