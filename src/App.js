import React from 'react';
import { Route } from 'react-router-dom';

import { Header, Tabs, Footer } from './components';
import { Movies, Channels } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Tabs />
      <div className="content">
        <Route path="/" component={Movies} exact />
        <Route path="/channels" component={Channels} exact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
