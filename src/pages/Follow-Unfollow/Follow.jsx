import React, { useContext } from 'react';
import { AppContext } from './AppContext'; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

const Profile = () => {
  const { profile, isFollowing, toggleFollow } = useContext(AppContext); 

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      {isFollowing? (
       <button onClick={toggleFollow}>Unfollow</button>
      ) : (
        <button onClick={toggleFollow}>Follow</button>
       
      )}
    </div>
  );
};

export default Profile;


