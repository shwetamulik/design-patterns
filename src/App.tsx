import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container } from './components/Container';
import UserInfo from './components/UserList';

function App() {

  return (
      <Container>
        <UserInfo/>
      </Container>
  );
}

export default App;
