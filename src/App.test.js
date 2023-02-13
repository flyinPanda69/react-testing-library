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

test('button turns blue when clicked', ()=> {
  render(<App/>);
  const colorButton = screen.getByRole('button',  { name : 'Change to blue' });
  //expect the button click 
});
