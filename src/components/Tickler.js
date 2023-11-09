import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  // return <button>Tickle me!</button>;
  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;



// function Clickable({ onClick }) {
//   return <button onClick={onClick}>Click Me</button>;
// }

// function App() {
//   function handleClick() {
//     console.log("click");
//   }

//   return <Clickable onClick={handleClick} />;
// }