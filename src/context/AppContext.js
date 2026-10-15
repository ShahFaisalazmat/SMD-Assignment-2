import React, { createContext, useContext, useMemo, useState } from 'react';
import { INTERVIEWS } from '../data/interviews';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [interviews, setInterviews] = useState(INTERVIEWS);
  const [savedIds, setSavedIds] = useState([]);
  const [history, setHistory] = useState([]);

  const toggleSaved = (id) =>
    setSavedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const addInterview = (interview) =>
    setInterviews((prev) => [{ ...interview, id: String(Date.now()) }, ...prev]);

  const addResult = (result) =>
    setHistory((prev) => [
      { ...result, id: String(Date.now()), date: new Date().toLocaleString() },
      ...prev,
    ]);

  const value = useMemo(
    () => ({ interviews, savedIds, history, toggleSaved, addInterview, addResult }),
    [interviews, savedIds, history]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
