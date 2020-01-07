import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import background from "../assets/background";
import { LargeHeader, MediumHeader, Paragraph, Button } from "./Common";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: calc(100vh - 60px);
	margin-top: 60px;
	background-image: ${props => `url(${props.background})`};
`;

const Container = styled.div`
	max-width: 400px;
	text-align: center;
`;

const Content = styled.div`
	margin-bottom: 30px;
`;

const Landing = () => (
	<Wrapper background={background}>
		<Container>
			<Content>
				<LargeHeader margin="10px">
					Welcome to Project Euler
				</LargeHeader>
				<MediumHeader margin="20px">
					Solutions in JavaScript
				</MediumHeader>
				<Paragraph>
					This site serves as a repository for my solutions to the
					Euler Project challenges.
				</Paragraph>
				<Paragraph>
					There are countless ways to solve these problems, therefore
					I do not claim that my solutions are the most efficient or
					logical.
				</Paragraph>
			</Content>
			<Link to="/problems/1">
				<Button width="100px">get started</Button>
			</Link>
		</Container>
	</Wrapper>
);

export default Landing;
