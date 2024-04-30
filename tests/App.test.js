import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  // Note: This test is expected to fail by default
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    
    // Fix this test by replacing the following assertion
    expect(getByText('Your app is not working!')).toBeTruthy();
    
    expect(getByText('Next, open up App.js to start working on your app!')).toBeTruthy();
  });
  // Note: This test is expected to fail by default
  it('should display a button', () => {
    const { getByText } = render(<App />);
    
    expect(getByText('Press me!')).toBeTruthy();
  });
});