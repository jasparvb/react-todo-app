import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// smoke test
it("renders without crashing", function() {
  render(<TodoList />);
});
// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function() {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no todos yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const nameInput = getByLabelText("Name:");
  const submitBtn = queryByText("Add a new todo!")

  // fill out the form
  fireEvent.change(nameInput, { target: { value: "Wash dishes" }});
  fireEvent.click(submitBtn);

  // todo exists!
  expect(queryByText("Wash dishes")).toBeInTheDocument();
});

it("can remove a todo", function() {
  const { getByLabelText, queryByText, getByText } = render(<TodoList />);

  const nameInput = getByLabelText("Name:");
  const submitBtn = getByText("Add a new todo!");
  
  // fill out the form
  fireEvent.change(nameInput, { target: { value: "Wash dishes" }});
  fireEvent.click(submitBtn);
  const removeBtn = getByText("X");
  
  expect(queryByText("Wash dishes")).toBeInTheDocument();
  fireEvent.click(removeBtn);
  // todo does not exist!
  expect(queryByText("Wash dishes")).not.toBeInTheDocument();
});

