import './App.css';
import React from 'react';
import ChildrenPropExample from './components/ChildrenPropExample';
import ConditionalRendering from './components/ConditionalRendering';
import ControlledComponent from './components/ControlledComponent';
import ListingStateUp from './components/ListingStateUp';
import MapFromArray from './components/MapFromArray';
import MapOverArrays from './components/MapOverArrays';
import MaterialTableDownload from './components/MaterialTableDownload';
import MyFavoriteAnimal from './components/MyFavoriteAnimal';
import PropTypesExample from './components/PropTypesExample';
import RandomUsers from './components/RandomUsers';
import ShowAndDestruct from './components/ShowAndDestruct';
import StateManagmant from './components/StateManagmant';
import StateManagmentUseReduser from './components/StateManagmentUseReduser';
import UpdatedTitle from './components/UpdatedTitle';
import DerivingState from './DerivingState';
import PropDrilling from './PropDrilling';

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
        <h1>ListingStateUp</h1>
        <ListingStateUp />
        <h1>ChildrenPropExample</h1>
        <ChildrenPropExample />
        <h1>PropTypesExample</h1>
        <PropTypesExample />
        <h1>MyFavoriteAnimal</h1>
        <MyFavoriteAnimal />
        <h1>RandomUsers</h1>
        <RandomUsers />
        <h1>DerivingState</h1>
        <DerivingState />
        <h1>PropDrilling</h1>
        <PropDrilling />
        <h1>StateManagmant</h1>
        <StateManagmant />
        <h1>StateManagmantUseReduser</h1>
        <StateManagmentUseReduser />
        <h1>MapFromArray</h1>
        <MapFromArray />
        <h1>Download</h1>
        <Download />
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
