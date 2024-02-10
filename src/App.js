import React from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from 'react-router-dom';
import UserListPage from './UserListPage';
import UserDetailsPage from './UserDetailsPage';
import './style.css';

function App() {
  return (
    
    <Router>

      
      <Routes>
        <Route path="/" exact element={<UserListPage/>} />
        <Route path="/user/:username" exact element={<UserDetailsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;