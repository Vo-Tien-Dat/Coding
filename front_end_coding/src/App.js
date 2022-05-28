import './App.css';
import NavbarIndex from './components/Header/Navbar.Index';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import routesIndex from './routes/routes.index';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarIndex />
        <Routes>
          {
            routesIndex.map(
              (route, index) =>
                <Route key={index} path={route.path} element={route.main} />
            )
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
