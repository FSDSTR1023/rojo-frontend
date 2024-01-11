import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    bio: '¡Hola! Soy John Doe.',
  });

  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <AppContext.Provider value={{ profile, isFollowing, toggleFollow }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
