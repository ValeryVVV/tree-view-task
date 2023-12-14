import TreeNode from "components/TreeNode/TreeNode";

export default function Tree({ treeData }) {
  return (
    <ul>
      {treeData?.map((node) => (
        <TreeNode node={node} key={node.id} />
      ))}
    </ul>
  );
};
