import React from 'react'
import styled from '@emotion/styled'


//using styled components
const H2 = styled.h2`
	text-align: center;
	color: #f5f5f5;
	margin: 3.6rem 0;
	font-size: 1.4rem;
`;

const P = styled.p`
	color: #f5f5f5;
	margin: 0 5rem;
	font-size: 0.9rem;
	line-height: 1.6;
`;


const Content = () => {
	return(
		<div>
			<H2>Dummy Heading</H2>

			<P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia dolores illo, eligendi officia quia, earum quas aut aspernatur odio
			</P>
		</div>
	);
}


export default Content;