import React, {useState, createContext} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: 'he way of Kings', id: 1},
        {title: 'Name of the Winds', id: 2},
        {title: 'The final empire', id: 3},
    ]);

    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;