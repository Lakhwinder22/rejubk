import React, { useState } from "react";

const Home = () => {
  const [brand, setBrand] = useState("FORD");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1999");
  const [color, setColor] = useState("white");

  return (
    <div>
      <h1>This is my {color} color</h1>
      <p>
        Its a {color} {model} from {year}....
      </p>
    </div>
  );
};

export default Home;
