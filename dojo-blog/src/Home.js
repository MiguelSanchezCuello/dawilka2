import React from "react";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName("Luigi");
    setAge(30);
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>

      <p>{name} is {age} years old</p>
    </div>
  );
};

export default Home;
