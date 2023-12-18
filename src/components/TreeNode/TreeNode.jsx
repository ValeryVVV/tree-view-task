import Tree from "components/Tree/Tree";
import { useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from "@mui/material";

export default function TreeNode({ node }) {
    const { children, name } = node;
      let button;

    const [showChildren, setShowChildren] = useState(false);

    const handleClick = () => {
        setShowChildren(!showChildren);
    };

    if (children) {
      button = <Button startIcon={<ExpandMoreIcon />}  onClick={handleClick}></Button>
    };

    if (showChildren) {
      button = <Button startIcon={<ExpandMoreIcon sx={{color: '#ed0808'}} />}  onClick={handleClick}></Button>
    };



  return (
      <>
        <Box sx={{ mb: 2 }}>
            {button}
            <Typography variant="h7">{name}</Typography>             
        </Box>
        <ul style={{ paddingLeft: "5px", borderLeft: "1px solid black" }}>
            {showChildren && <Tree treeData={children} />}
        </ul>
    </>
  );
}