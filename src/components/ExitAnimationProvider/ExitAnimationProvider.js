'use client';
import React, { useContext } from 'react';

export const ExitAnimationContext = React.createContext();

function ExitAnimationProvider({ children }) {
  const [startExitAnimation, setStartExitAnimation] = useState(false);

  return (
    <ExitAnimationContext.Provider value={{ startExitAnimation, setStartExitAnimation }}>
      {children}
    </ExitAnimationContext.Provider>
  );
}

export default ExitAnimationProvider;
