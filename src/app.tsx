import { useEffect } from 'react';

import Navigation from './navigation';

const App = () => {
  useEffect(() => {
    console.log('Version v.1.0.0');
  }, []);

  return <Navigation />;
};

export default App;
