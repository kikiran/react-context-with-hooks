import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import BookList from './components/Book';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeButton from './components/ThemeButton';
import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/Songs';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <header >
      <ThemeContextProvider>
      <AuthContextProvider >
        <Navbar />
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
        <ThemeButton />
      </AuthContextProvider>
      </ThemeContextProvider>
      <SongList />
      </header>
    </div>
  );
}

export default App;
