import { useEffect } from 'react';

import Navigation from './navigation';

const App = () => {
  useEffect(() => {
    console.log('Version: 1.1.2');
  }, []);

  return <Navigation />;
};

export default App;
