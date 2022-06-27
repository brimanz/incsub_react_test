import React from 'react'
import {render, screen} from '@testing-library/react'
import Form from "../components/Form"

beforeEach(() => render(<Form />));

describe('Form component', () => {
	test('must display a link to the user', () =>{
		const userLink = (/sign in/i);

		expect(screen.getByText(userLink)).toBeInTheDocument();
	})


	test('must display button text', () =>{
		const buttonElem = screen.getByRole('button', {name: /next/i});

		expect(buttonElem).toBeInTheDocument();
	})


	test('must display a input placeholder', () =>{
		const inputPlace = screen.getByPlaceholderText(/your name/i);

		expect(inputPlace).toBeInTheDocument();
	})
})