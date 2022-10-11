import React, { useEffect, useState } from 'react';

export default function RandomUsers() {
  const [usersList, setUsersList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [refetch, setRefetch] = useState(true);
  const [loading, setLoadind] = useState(true);
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
      setLoadind(false);
    }
    getRandomUsers().catch(() => {
      // console.log('fetch fails');
    });
  }, [refetch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {/* {console.log(usersList)} */}
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
      <button
        onClick={() => {
          const filteredUserList = usersList.filter((user, index) => {
            return index < usersList.length - 1;
          });
          setUsersList(filteredUserList);
        }}
      >
        Remove user
      </button>

      <button
        onClick={() => {
          const updatedUserList = [
            ...usersList,
            {
              name: {
                first: 'Alex',
                last: 'Pit',
              },
              gender: 'male',
              email: '123321@gmail.com',
            },
            {
              name: {
                first: 'Milla',
                last: 'Cool',
              },
              gender: 'female',
              email: 'Milla1999@gmail.com',
            },
            {
              name: {
                first: 'Marta',
                last: 'Black',
              },
              gender: 'female',
              email: 'martab@gmail.com',
            },
          ];
          setUsersList(updatedUserList);
        }}
      >
        Add users
      </button>

      {/* <button
        onClick={() => {
          const newList = [...usersList];
          newList[0].name.first = 'New first name';
          newList[0].name.last = 'New last name';
        }}
      >
        Update name of new user
      </button> */}
      <button
        onClick={() => {
          const updatedList = usersList.map((user, index) => {
            if (index === 0) {
              const newUser = { ...user };
              newUser.name.first = 'New first name';
              newUser.name.last = 'New last name';
              return newUser;
            }
            return user;
          });
        }}
      >
        Update name of new user
      </button>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setRefetch(!refetch)}>refetch</button>
    </div>
  );
}
