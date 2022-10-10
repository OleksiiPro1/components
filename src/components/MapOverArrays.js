const fruits = [
  { id: 1, name: 'banana', description: 'description 1' },
  { id: 2, name: 'apple', description: 'description 2' },
  { id: 3, name: 'orange', description: 'description 3' },
  { id: 4, name: 'kiwi', description: 'description 4' },
  { id: 5, name: 'papaya', description: 'description 5' },
  { id: 6, name: 'mango', description: 'description 6' },
];

export default function MapOverArrays() {
  // const listOfFruits = [
  //   <li key="banana">banana</li>,
  //   <li key="apple">apple</li>,
  //   <li key="orange">orange</li>,
  //   <li key="kiwi">kiwi</li>,
  //   <li key="papaya">papaya</li>,
  //   <li key="mango">mango</li>,
  // ];

  const listOfFruitsFromMap = fruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name}
        {' - '}
        {fruit.description}
      </li>
    );
  });

  return <ul>{listOfFruitsFromMap}</ul>;
}
