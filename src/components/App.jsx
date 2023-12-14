import React, { useState } from "react";
import { treeData } from '../config/treeData';
import Tree from "./Tree/Tree";
import Filter from "./Filter/Filter";

export const App = () => {
    const [filter, setFilter] = useState('');

    const changeFilter = e => {
        setFilter(e.currentTarget.value.trim());
        console.log(e.currentTarget.value);
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return treeData.filter(tree =>
            tree.label.toLowerCase().includes(normalizedFilter)
        );
    };
    const visibleContacts = getVisibleContacts();
  return (
    <div className="App">
        <h1>React Tree View</h1>
        <Filter value={filter} onChange={changeFilter} />
        <Tree treeData={visibleContacts} />
    </div>
  );
};
