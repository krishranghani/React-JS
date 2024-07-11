import React from 'react'

const person = {
    name: 'Gregorio Y. Zara',
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
function TodoList2() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.imageUrl}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
export default TodoList2;
// added imageurl