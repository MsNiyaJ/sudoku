import React from 'react';

const Row = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <div className="row">{props.children}</div>;
};

export default Row;
