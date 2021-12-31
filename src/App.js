
import './App.css';
import Rover from './components/Rover/Rover';
import './components/Rover/Rover.css';
function App() {
  return (
    <div className="App">
      <Rover />


      <ul className='board'>
        <li className='square'>4</li>
        <li className='square'>2</li>
        <li className='square'>3</li>
        <li className='square'>4</li>
        <li className='square'>5</li>
        <li className='square'>3</li>
        <li className='square'>2</li>
        <li className='square'>3</li>
        <li className='square'>4</li>
        <li className='square'>5</li>
        <li className='square'>2</li>
        <li className='square'>1</li>
        <li className='square'>2</li>
        <li className='square'>3</li>
        <li className='square'>4</li>
        <li className='square'>1</li>
        <li className='square'>6</li>
        <li className='square'>1</li>
        <li className='square'>2</li>
        <li className='square'>3</li>
        
        <li className='square'>0</li>
        <li className='square'>1</li>
        <li className='square'>2</li>
        <li className='square'>3</li>
        <li className='square'>4</li>
      </ul>
    </div>
  );
}

export default App;
