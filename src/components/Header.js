import React from "react";
import styled from "styled-components";
import { Link as A } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

const Wrapper = styled.div`
	z-index: 100;
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	padding: 12px 20px;
	background: #2d3748;
	border-top: 4px solid #2e3749;
	border-bottom: 4px solid #1a202c;
`;
const Container = styled.div`
	max-width: 1000px;
	margin: 0px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled(A)`
	font-size: 28px;
	font-weight: 700;
	text-decoration: none;
	color: #ffffff;
`;
const Links = styled.div``;
const Link = styled(A)`
	margin-left: 20px;
	text-decoration: none;
	color: #ffffff;
`;

const Header = () => (
	<Wrapper>
		<Container>
			<Title to="/project-euler-solutions">Project Euler</Title>
			<Links>
				<Link to="/problems/1">
					<FontAwesomeIcon icon={faList} />
				</Link>
				<Link to="/about">
					<FontAwesomeIcon icon={faQuestionCircle} />
				</Link>
			</Links>
		</Container>
	</Wrapper>
);

export default Header;
