import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


// class ThemeButton extends Component {
//     static contextType = ThemeContext;
    
//     render() {
//         const { toggleChange} = this.context;

//         return (
//             <button onClick={toggleChange}>Change Theme</button>
//         )
        
//     }
// }
const ThemeButton = () => {
    const { toggleChange} = useContext(ThemeContext);

    return ( 
        <button onClick={toggleChange}>Change Theme</button>

     );
}
 
export default ThemeButton;

