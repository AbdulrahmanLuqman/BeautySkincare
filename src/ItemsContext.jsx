import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [itemsAdded, setItemsAdded] = useState([]);
    const [quantity, setQuantity] = useState(1)

    return (
        <ItemsContext.Provider value={{ itemsAdded, setItemsAdded, quantity, setQuantity }}>
            {children}
        </ItemsContext.Provider>
    );
};