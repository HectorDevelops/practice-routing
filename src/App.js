import { Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome';
import Greeting from './components/color';
import PlainGreeting from './components/word';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/:greet" element={<PlainGreeting/>}/>
        <Route path="/:greet/:color1/:color2" element={<Greeting/>}/>
      </Routes>
    </div>
  );
}

export default App;
