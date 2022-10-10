import './App.css';
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
      </header>
    </div>
  );
}

export default App;
