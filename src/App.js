import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Course from './pages/Course';
import Dashboard from './pages/Dashboard';
import { AppContext } from './context';
import Module from './pages/Module';

//const AppContext = createContext();

function App() {
  const [language, setLanguage] = useState('FR');

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Routes>


          <Route path="/home" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/module/:idModule" element={<Module />}></Route>


          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
