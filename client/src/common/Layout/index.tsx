import React from "react";

interface Props {
  children: Element;
  name: string;
}

function LayOut(props: Props) {
  const { children, name } = props;
  return <div className={name}>
  {children}
</div>;
}

export default LayOut;
