import React, { useEffect, useState } from 'react';

export default function RandomUsers(props) {
  const [usersList, setUsersList] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log('trigger');
    async function getRandomUsers() {
      const data = await fetch('https://randomuser.me/api/?result=3');
      const users = await data.json();
      const cleanedUsers = users.results.map((user) => {
        return {
          name: user.name,
          email: user.email,
          gender: user.gender,
        };
      });
      setUsersList(cleanedUsers);
    }
    getRandomUsers().catch(() => {
      console.log('fetch fails');
    });
  }, []);

  return (
    <div>
      {console.log(usersList)}
      {usersList.map((user) => {
        return (
          <div
            style={{ backgroundColor: 'black', padding: '30px' }}
            key={`${user.name.first}-${user.name.last}`}
          >
            <p>{user.name.first}</p>
            <p>{user.name.last}</p>
            <p>{user.email}</p>
            <p>{user.gender}</p>
          </div>
        );
      })}
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}
