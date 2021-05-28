import './App.css'
import Header from './components/Header.js'
import Tabs from './components/Tabs.js'

function App() {
  return (
    <div className='container'>
      <Header />
      <div>
        <div className="row">
          <div className="col-left">
            <Tabs />
          </div>
          <div className="col-right"></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
