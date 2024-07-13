import React from "react";

const Home = () => {
  const handleClick = (e) => {
    console.log("clicked", e.target);
  };

  const handleClickAgain = (name, e) => {
    console.log("clicked again", name, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("mario", e)}>
        Click me Again
      </button>
    </div>
  );
};

export default Home;
