import React from 'react'
import {render, screen} from '@testing-library/react'
import App from "../App"


describe('App component', () => {
	
	test('must display App title', () =>{
		render(<App />);
		const wordTitle = 'Lets set up your account';

		expect(screen.getByText(wordTitle)).toBeInTheDocument();
	})
})
