import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends Component {
//     // static contextType = ThemeContext;
//     render() { 
        
//         return(
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{ (themeContext) => {
//                         const {isAuthUser, toogleAuth } = authContext;
//                         const { isLightTheme, light, dark } = themeContext;
//                         const themeChange  = isLightTheme ? light : dark;
//                         return (
//                             <nav style={{ background: themeChange.ui, color: themeChange.syntax }} >
//                                 <h1>Context API</h1>
//                                 <div onClick={toogleAuth}>
//                                     {isAuthUser ? 'Logged Out' : 'Logged In'}
//                                 </div>
//                                 <ul>
//                                     <li>Home</li>
//                                     <li>About</li>
//                                     <li>Contact</li>
                                    
//                                 </ul>
//                             </nav>
//                     )
//                     }
                    
                    
//                     }
//                 </ThemeContext.Consumer>
//             )}

//             </AuthContext.Consumer>
//         )

//     }
// }
 
const Navbar = () => {
    const {isAuthUser, toogleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const themeChange  = isLightTheme ? light : dark;

    return (
            <nav style={{ background: themeChange.ui, color: themeChange.syntax }} >
                <h1>Context API</h1>
                <div onClick={toogleAuth}>
                    {isAuthUser ? 'Logged Out' : 'Logged In'}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
      );
}
 

export default Navbar;

