import React, { Component, createContext } from 'react';

export const AuthContext = createContext();


class AuthContextProvider extends Component {
    state = { 
        isAuthUser: false
     }
     toggleAuth = () => {
        this.setState({ isAuthUser: !this.state.isAuthUser })
     }

    render() { 
        return ( 
            <AuthContext.Provider value={{ ...this.state , toogleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;