import './App.css';
import React from 'react';
import ChildrenPropExample from './components/ChildrenPropExample';
import ConditionalRendering from './components/ConditionalRendering';
import ControlledComponent from './components/ControlledComponent';
import ListingStateUp from './components/ListingStateUp';
import MapOverArrays from './components/MapOverArrays';
import MyFavoriteAnimal from './components/MyFavoriteAnimal';
import PropTypesExample from './components/PropTypesExample';
import RandomUsers from './components/RandomUsers';
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
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
