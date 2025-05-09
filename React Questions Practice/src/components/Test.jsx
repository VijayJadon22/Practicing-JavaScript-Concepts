import React from "react";

const Test = () => {
  console.log("Test rendering again");
  return (
    <div>
      <h4>Test Component rendered</h4>
    </div>
  );
};

export default React.memo(Test);
