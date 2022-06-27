import React from 'react'
import styled from '@emotion/styled'


//using styled components

const H2 = styled.h2`
	color: #0F2027;
	margin: 2rem 0;
	font-size: 1.9rem;
`;

const Text1 = styled.p`
	color: #0F2027;
	margin: 2rem 0;
	font-size: 0.9rem;
`;

const Text2 = styled.p`
	color: #0F2027;
	opacity: 0.5;
	font-size: 0.8rem;
`;

const A = styled.a`
	color: #2F80ED;
	text-decoration: none;
	font-weight: bold;

	&&:hover{
		opacity: 0.9;
	}
`;

const Input = styled.input`
	width: 75%;
	padding: 0.8rem;
	background: transparent;
	border: 0.1rem solid #DBDBDB;
	margin: 1rem 0;
	border-radius: 0.2rem;
`;

const Select = styled.select`
	width: 80%;
	padding: 0.8rem;
	background: transparent;
	border: 0.1rem solid #DBDBDB;
	margin: 1rem 0;
	border-radius: 0.2rem;
`;

const Button = styled.button`
	width: 80%;
	background: #2F80ED;
	color: #f5f5f5;
	font-size: 1rem;
	font-weight: bold;
	padding: 0.8rem;
	margin: 2rem 0;
	cursor: pointer;
	border-radius: 0.2rem;
	border: none;

	&&:hover{
		opacity: 0.9;
	}
`;


const Form = ({title}) =>{
	return(
		<div className="form-data">
			<H2>Lets set up your account</H2>
			<Text1>Already have an account? <A href="/">Sign in</A></Text1>

			<form className="form-elements">
				<Input 
					type="text" 
					name="name"
					placeholder="Your name"
					required
				/>

				<Input 
					type="email" 
					name="email"
					placeholder="Email address"
					required
				/>

				<Select id="dropdown">
                    <option value="">I would describe my user type as</option>
                    <option value="developer">Developer</option>
                </Select>

                <Input 
					type="password" 
					name="password"
					placeholder="Password"
					required
				/>

				<Text2>Minimum 8 characters</Text2>

				<Button
					type="submit"
				>
					Next
				</Button>

				<p className="service-terms">By clicking the "Next" button, you agree to creating a free account, to <A href="/">Terms <br/> of Service</A> and <A href="/">Privacy Policy</A></p>
			</form>
		</div>
	);
}


export default Form;