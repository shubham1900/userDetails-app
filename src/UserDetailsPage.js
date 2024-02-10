import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserDetails(data))
      .catch(error => console.error('Error fetching user details:', error));
  }, [username]);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Details for {userDetails.login}</h2>
      <img src={userDetails.avatar_url} alt={`${userDetails.login}'s avatar`} />
      <p>Name: {userDetails.name}</p>
      <p>Company: {userDetails.company}</p>
      <p>Followers: {userDetails.followers}</p>
      <p>Following: {userDetails.following}</p>
      <p>Public Repositories: {userDetails.public_repos}</p>
    </div>
  );
};

export default UserDetails;
