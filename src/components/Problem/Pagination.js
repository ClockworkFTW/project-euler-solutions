import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { data } from "../../data";

import { Button } from "../Common";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`;

const Title = styled.h1`
	margin: 0px 20px;
	font-size: 22px;
	font-weight: 700;
	text-align: center;
	color: #2d3748;
`;

const Pagination = ({ title, id }) => (
	<Container>
		<Link to={`/problems/${id - 1}`}>
			<Button width="100px" disabled={id - 1 == 0}>
				Prev
			</Button>
		</Link>
		<Title>{title}</Title>
		<Link to={`/problems/${id + 1}`}>
			<Button width="100px" disabled={id == data.length}>
				Next
			</Button>
		</Link>
	</Container>
);

export default Pagination;
