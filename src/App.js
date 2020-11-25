import logo from './logo.svg';
import './App.css';
import HomePages from './pages/index'
import Contact from './pages/contact'
import Ex1 from './Ex-1'


function App() {
  return (
    <div className="App">
      {/* Ex-0 */}
      <div>
        <h3>Ex-0</h3>
        <div>
          <HomePages />
          <Contact />
        </div>
      </div>

      {/* Ex-1 */}
      <div className="mt3">
        <h3>Ex-1</h3>
        <Ex1 />
      </div>
    </div>
  );
}

export default App;
