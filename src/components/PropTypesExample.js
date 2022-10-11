import PropTypes from 'prop-types';
// need to install PropTypes
import React from 'react';

function UserCard(props) {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <h3>name: {props.name}</h3>
      <p>nickName: {props.nickName}</p>
      <p>favorite food: {props.favoriteFood}</p>
      <p>start year: {props.startYear}</p>
      <p>keyphrase: {props.credentials.keyphrase}</p>
      <h3>favorite fruit</h3>
      <ul>
        {props.fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  nickName: PropTypes.string,
  favoriteFood: PropTypes.string,
  startYear: PropTypes.number.isRequired,
  fruits: PropTypes.array,
  credentials: PropTypes.shape({
    keyphrase: PropTypes.string.isRequired,
  }),
};

export default function PropTypesExample() {
  return (
    <div>
      <h2>Prop-types example</h2>
      <UserCard
        name="Alexey"
        nickName="Piltenko"
        favoriteFood="kiwi"
        startYear={2022}
        fruits={['mango', 'kiwi']}
        credentials={{ keyphrase: 'Everithing is ok' }}
      />
      <UserCard
        name="Karl"
        nickName="Brown"
        favoriteFood="mango"
        startYear={2011}
        fruits={['banana', 'orange']}
        credentials={{ keyphrase: 'hello!)' }}
      />
    </div>
  );
}
