import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    
    // Assert that the text "Your app is working!" is rendered
    expect(getByText('Your app is working!')).toBeTruthy();
    
    // Assert that the text "Next, open up App.js to start working on your app!" is rendered
    expect(getByText('Next, open up App.js to start working on your app!')).toBeTruthy();
  });
});