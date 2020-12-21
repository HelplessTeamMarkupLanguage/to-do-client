import React from 'react';

const layout = (props) => {
  return (
    <>
      <div>HEader</div>
      <div>{props.children}</div>
    </>
  );
};

export default layout;
