import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './containers/Layout'


function App() {
  return (
    <div className="App">
       <Router>
        <Layout >
          
        </Layout>
      </Router>
    </div>
  );
}

export default App;
