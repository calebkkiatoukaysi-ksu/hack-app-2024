import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Helmet } from 'react-helmet';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <main className="App"> 
      <Helmet>
        <link href="./output.css" rel="stylesheet" />
      </Helmet>
      <header className="column">
        {isAuthenticated ? <Home /> : <Login />}
      </header>
    </main>
  );
}

export default App;