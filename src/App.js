import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

// Components
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxW='container.lg' bgColor='teal.100' borderColor='teal.300' borderWidth={3} borderRadius={10}>
        <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/' component={ItemList} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
