import React, {  useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {BookContext } from '../contexts/BookContext';

// class BookList extends Component {
//     static contextType = ThemeContext;
//     render(){
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return(
//             <div className='book-list' style={{ background: theme.ui, color: theme.syntax}}>
//                 <ul >
//                     <li>The way of Kings</li>
//                     <li>Name of the Winds</li>
//                     <li>The final empire</li>
//                 </ul>
//             </div>
//         )
//     }
// }

const BookList = () => {
    const { books } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className='book-list' style={{ background: theme.ui, color: theme.syntax}}>
        <ul >
            {
                books.map((book) => {
                    return <li key={book.id}>{book.title}</li>
                })
            }
        </ul>
    </div>
     );
}
 

export default BookList;