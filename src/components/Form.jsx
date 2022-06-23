import React from 'react'
import styled from '@emotion/styled'


//using styled components

const Input = styled.input`
	width: 75%;
	padding: 0.7rem;
	background: transparent;
	border: 0.1rem solid #DBDBDB;
	margin: 1rem 0;
	border-radius: 0.2rem;
`;

const Select = styled.select`
	width: 79%;
	padding: 0.7rem;
	background: transparent;
	border: 0.1rem solid #DBDBDB;
	margin: 1rem 0;
	border-radius: 0.2rem;
`;

const Button = styled.button`
	width: 79%;
	background: #2F80ED;
	color: #f5f5f5;
	font-size: 1rem;
	font-weight: bold;
	padding: 0.7rem;
	margin: 2rem 0;
`;


const Form = ({title}) =>{
	return(
		<div className="form-data">
			<h2 className="title">{title}</h2>
			<p className="sub-title">Already have an account?</p>

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

				<p className="final-text">Minimum 8 characters</p>

				<Button
					type="submit"
				>
					Next
				</Button>

				<p className="service-terms">By clicking the "Next" button, you agree to creating a free account, to <strong>Terms <br/> of Service</strong> and <strong>Privacy Policy</strong></p>
			</form>
		</div>
	);
}


export default Form;