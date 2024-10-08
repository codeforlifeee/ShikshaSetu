
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data);
      setUsername(response.data.username);
      setEmail(response.data.email);
    } catch (err) {
      console.error('Error fetching user profile:', err);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      await axios.put('http://localhost:5000/api/auth/profile', { username, email }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchUserProfile(); // Refresh user profile after update
    } catch (err) {
      setError('Error updating profile');
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Update Profile</button>
        {error && <p>{error}</p>}
      </form>
      <h2>Your Details</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
