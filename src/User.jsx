import React, { memo, useEffect, useState } from "react";
import { Panel, Button, Input } from "rsuite";

const buttonStyles = { margin: 10 };

const User = (props) => {
  const [age, setAge] = useState(props.age);
  const [name, setName] = useState(props.name);

  const plusOne = () => {
    setAge((prev) => prev + 1);
  };
  const minusOne = () => {
    setAge((prev) => prev - 1);
  };
  console.log("cUpdated State User");
  return (
    <Panel header={<Input value={name} />} bordered>
      <Button style={buttonStyles} color="violet" onClick={plusOne}>
        +1
      </Button>
      <Button color="violet" appearance="ghost">
        {age}
      </Button>
      <Button style={buttonStyles} color="violet" onClick={minusOne}>
        -1
      </Button>
    </Panel>
  );
};

export default memo(User);
