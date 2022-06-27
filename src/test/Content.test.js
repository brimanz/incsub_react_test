import React from 'react'
import {render, screen} from '@testing-library/react'
import Content from "../components/Content"


describe('Content component', () => {
	
	test('must display a heading', () =>{
		render(<Content />);
		const contentHeading = (/dummy heading/i);

		expect(screen.getByText(contentHeading)).toBeInTheDocument();
	})
})
