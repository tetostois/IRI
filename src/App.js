import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Course from './pages/Course';
import Dashboard from './pages/Dashboard';
import { AppContext } from './context';
import Module from './pages/Module';
import Apropos from './pages/Apropos';
import Transition from './pages/Transition';

//const AppContext = createContext();

function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [language, setLanguage] = useState('FR');
  const [user, setUser] = useState(null)

  return (

    <AppContext.Provider value={{ language, setLanguage, user, setUser, isOnline, setIsOnline }}>
      <CheckInternetConnection isOnline={isOnline} setIsOnline={setIsOnline} />
      <Router>
        <Routes>


          <Route path="/home" element={<Home />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="/transition" element={<Transition />}></Route>
          <Route path="/module/:idModule" element={<Module />}></Route>


          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;







function CheckInternetConnection({ isOnline, setIsOnline }) {

  const checkInternet = async () => {
    try {
      const response = await fetch('https://www.google.com');
      if (response.ok) {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    } catch (error) {
      setIsOnline(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(checkInternet, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

}


