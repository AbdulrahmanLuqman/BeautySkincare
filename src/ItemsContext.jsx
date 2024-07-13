import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [itemsAdded, setItemsAdded] = useState([]);

    return (
        <ItemsContext.Provider value={{ itemsAdded, setItemsAdded }}>
            {children}
        </ItemsContext.Provider>
    );
};