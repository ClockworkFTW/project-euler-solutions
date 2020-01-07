import React from "react";
import styled from "styled-components";
import { Link as A, useParams } from "react-router-dom";

import { data } from "../data";

const Container = styled.div`
	position: fixed;
	width: 240px;
	height: calc(100vh - 100px);
	padding: 20px;
	border-radius: 5px;
	border-bottom: 4px solid #cbd5e0;
	background: #edf2f7;
	overflow: scroll;
`;

const Link = styled(A)`
	display: block;
	padding: 10px;
	font-size: 14px;
	text-decoration: none;
	border-radius: 5px;
	color: ${props => (props.active ? "#ffffff" : "#4a5568")};
	background: ${props => (props.active ? "#CBD5E0" : "none")};
	&:hover {
		cursor: pointer;
	}
`;

const Sidebar = () => {
	const { id } = useParams();

	return (
		<Container>
			{data.map(e => (
				<Link key={e.id} to={`/problems/${e.id}`} active={id == e.id}>
					{e.id}. {e.title}
				</Link>
			))}
		</Container>
	);
};

export default Sidebar;
