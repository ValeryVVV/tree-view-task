import { useState } from 'react';

import Filter from 'components/TreeFilter/TreeFilter';
import Tree from 'components/Tree/Tree';
import { treeData } from '../../config/treeData';
import { Box } from '@mui/material';



function TreeCard() {
    const [filter, setFilter] = useState('');

    const changeFilter = e => {
        setFilter(e.currentTarget.value.trim());
        console.log(e.currentTarget.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        let filteredNode = treeData.filter(child =>
            child.name.toLowerCase().includes(normalizedFilter)
        );
        return filteredNode;
    };
    const visibleContacts = getVisibleContacts();

    
    return (
        <Box>
            <Filter value={filter} onChange={changeFilter} />
            <Tree treeData={visibleContacts} />
        </Box>
    );
}

export default TreeCard;
