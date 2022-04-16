import React, { useState } from "react";

import { Button } from "rsuite";
import { generate } from "shortid";
import User from "./User";
// import Viewer from "./Viewer";

const App1 = () => {
  const [users, setUsers] = useState([
    { name: "taoufik", age: 23 },
    { name: "ali", age: 97 },
    { name: "sarah", age: 29 },
    { name: "mohammed", age: 14 },
    { name: "mariam", age: 49 }
  ]);

  console.log("cUpdated State App");
  const mapState = () => {
    setUsers((prev) =>
      prev.map(({ name, age }) => ({ name: `@${name}`, age: age * 10 }))
    );
  };

  users.forEach((user) => console.log(user.name, user.age));

  return (
    <div>
      <Button color="red" onClick={mapState}>
        Update State
      </Button>
      {users.map(({ name, age }, index) => (
        // <User key={generate()} name={name} age={age} />
        <User key={index} name={name} age={age} />
      ))}
      {/* <Viewer /> */}
    </div>
  );
};

export default App1;
