import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import ControlledComponent from './components/ControlledComponent';
import MapOverArrays from './components/MapOverArrays';
import ShowAndDestruct from './components/ShowAndDestruct';
import UpdatedTitle from './components/UpdatedTitle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UpdatedTitle</h1>
        <UpdatedTitle />
        <h1>ShowAndDestruct</h1>
        <ShowAndDestruct />
        <h1>MapOverArrays</h1>
        <MapOverArrays />
        <h1>ConditionalRendering</h1>
        <ConditionalRendering />
        <h1>ControlledComponent</h1>
        <ControlledComponent />
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
