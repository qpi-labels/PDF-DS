import React, { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Guide from './pages/Guide';
import Editor from './pages/Editor';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#/editor') return <Editor />;
  if (currentHash === '#/guide') return <Guide />;
  
  return <Landing />;
}
