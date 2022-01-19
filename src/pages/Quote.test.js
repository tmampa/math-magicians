import react from "react";
import { BrowserRouter, Route } from "react-router-dom";
import renderer from "react-test-renderer";
import Quote from "./Quote";

it("renders correctly", () => {
  const tree =  renderer.create(
    <BrowserRouter>
      <Route>
        <Quote />
      </Route>
    </BrowserRouter>
  ).toJSON
  expect(tree).toMatchSnapshot();
});