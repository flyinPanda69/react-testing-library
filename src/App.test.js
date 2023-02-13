import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { logRoles } from '@testing-library/dom';

test('button has correct initial color, and updates when clicked', () => {
  const {container} = render(<App/>);
  logRoles(container);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name : 'Change to blue' });

  //expect the background color to be red
  expect(colorButton).toHaveStyle( {backgroundColor : 'red' });

  //click button
  fireEvent.click(colorButton);

  //expect the background color change to blue
  expect(colorButton).toHaveStyle( { backgroundColor: 'blue'});

  //expect the blue text to be 'Change to red'
  expect(colorButton).toHaveTextContent(/change to red$/i);

});

test('initial conditions', ()=> {
  render(<App/>);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(colorButton).not.toBeChecked();
});

//Code quiz for checkbox

test('check the button state on checkbox click', ()=> {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name : 'Disable button'});
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  //fire the checkbox click event, and check if the color button is getting disabled or not
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  
  //fire the checkbox again to check if the button is getting enabled or not
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
