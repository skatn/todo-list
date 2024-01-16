import { createContext, useState } from 'react';

export const TabContext = createContext();

export function TabProvider({ children }) {
  const [tab, setTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}

const initialValue = 'all'; //all, active, completed
