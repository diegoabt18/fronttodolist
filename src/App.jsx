import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Index from './pages/Index';

//const Contexto = createContext("");

function App() {
  
  return (
      <div className="App" id="App">
          <Header />
          <Routes >
              <Route path='/index' element={<Index/>} />
              <Route  path='/category' element={<Categories/>} >
                  <Route path=':categories' element={<Categories/>} />
              </Route>
          </Routes>
          {/*<Footer />*/}
      </div>
  );
}

export default App;
