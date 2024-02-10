import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="user-list-item">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="user-list-item-avatar" />
            <div>
              <span>{user.login}</span>
              <Link to={`/user/${user.login}`}>
                <button className="view-details-button">View Details</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
