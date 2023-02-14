import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";
import { logRoles } from "@testing-library/react";

test("button has correct initial color, and updates when clicked", () => {
  const { container } = render(<App />);
  logRoles(container);
  // find an element with a role of button and text of 'Change to blue'
  //const colorButton = screen.getByRole('button', { name : 'Change to blue' });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  //expect the background color to be red
  //expect(colorButton).toHaveStyle( {backgroundColor : 'red' });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color change to blue
  //expect(colorButton).toHaveStyle( { backgroundColor: 'blue'});
  expect(colorButton).toHaveStyle({ backgroundColor: "Midnight Blue" });

  //expect the blue text to be 'Change to red'
  //expect(colorButton).toHaveTextContent(/change to red$/i);
  expect(colorButton).toHaveTextContent(/change to medium violet red$/i);
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  //const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  const colorButton = screen.getByRole("button", {
    backgroundColor: "Change to Medium Violet Red",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

//Code quiz for checkbox

test("check the button state on checkbox click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  //fire the checkbox click event, and check if the color button is getting disabled or not
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  //fire the checkbox again to check if the button is getting enabled or not
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("click checkbox to disable the button and change the color to grey and renables it back after unchecking the checkbox", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  //fire event to simulate checkbox
  fireEvent.click(checkbox);
  //Check the button is grey
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });
  expect(colorButton).toBeDisabled();

  //simulate checkbox to enable the button by unchecking the checkbox
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("click the button to change the color to blue, then simulate the checkbox click to disable the button and renable it", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  //fire event to simulate button click;
  fireEvent.click(colorButton);

  //fire event to simulate checkbox click;
  fireEvent.click(checkbox);

  //Assert the button style and color
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "grey" });

  //fire event to simulate uncheck event
  fireEvent.click(checkbox);

  //Assert the button style and color back to blue
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital leters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightVioletRed")).toBe(
      "Midnight Violet Red"
    );
  });
});
