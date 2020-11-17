//example of lists in react

import React from 'react';

const names = ['kohli', 'anu', 'kareena'];

const ListOfNames = () => {
    const listItems = names.map((name)=> 
        <li key = {name}>
            {name}
        </li>
    );
    return(
        <ol>{listItems}</ol>
    );
}

export default ListOfNames;