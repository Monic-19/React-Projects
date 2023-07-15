import './App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchange from './components/Exchange';
import Footer from './components/Footer';
import CoinDetails from './components/CoinDetails';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>

      <Header></Header>
       
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/exchange' element={<Exchange></Exchange>}></Route>
        <Route path='/coin/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='*' element={<Error msg={"Not a valid path"}></Error>}></Route>
      </Routes>

      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;
