import logo from './logo.svg';
import './App.css';
import HomePages from './pages/index'
import Contact from './pages/contact'
import Ex1 from './Ex-1'
import Ex2 from './Ex-2/Home'
import Databinding from './Databinding'
import ExCar from './Ex-Car'
import ExMovies from './Ex-Movies'
import ShoppingCart from './ShoppingCart'

function App() {
  return (
    <div className="App">
      {/* Ex-0 */}
      {/* <div>
        <h3>Ex-0</h3>
        <div>
          <HomePages />
          <Contact />
        </div>
      </div> */}

      {/* Ex-1 */}
      {/* <div className="mt3">
        <h3>Ex-1</h3>
        <Ex1 />
      </div> */}

      {/* Ex-2 */}
      {/* <div className="mt3">
        <h3>Ex-2</h3>
        <Ex2 />
      </div> */}

      {/* Databinding */}
      {/* <Databinding/> */}

      {/* Ex-Car  */}
      {/* <ExCar/> */}

      {/* Ex-Movie  */}
      {/* <ExMovies/> */}

      {/* Shopping Cart  */}
      <ShoppingCart/>
    </div>
  );
}

export default App;
