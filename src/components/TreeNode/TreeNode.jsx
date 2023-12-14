import Tree from "components/Tree/Tree";
import { useState } from "react";

export default function TreeNode({ node }) {
  const { children, label } = node;

  const [showChildren, setShowChildren] = useState(false);

    const handleClick = () => {
        setShowChildren(!showChildren);
    };

    let button;
    if (!children) {
      button = <button disabled>12</button>;
    } else {
      button = <button onClick={handleClick}>123</button>
    }
    console.log(children)
  return (
    <>
      <div  style={{ marginBottom: "10px" }}>
              {button}
              <span>{label}</span>
      </div>
      <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
  );
}