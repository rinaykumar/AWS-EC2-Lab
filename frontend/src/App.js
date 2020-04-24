import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = React.useState('');

  React.useEffect(() => {
    axios.get('/api/hello')
      .then(res => setGreeting(res.data))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
        </p>
      </header>
    </div>
  );
}

export default App;
