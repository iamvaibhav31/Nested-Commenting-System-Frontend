import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Postdetail from './pages/Postdetail'
import { Provider } from './Context/ContextApi'
function App() {
  return (
    <div className="container">
      <Provider>
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<Postdetail />} />

          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
