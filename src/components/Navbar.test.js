import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Navbar from './Navbar';

it("render the navBar",() => {
  const tree = TestRenderer.create(
    <BrowserRouter>
      <Route>
        <Navbar />
      </Route>
    </BrowserRouter>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
})
