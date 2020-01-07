import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { data } from "../data";

import Sidebar from "./Sidebar";
import Problem from "./Problem";

const Container = styled.div`
	max-width: 1040px;
	margin: 60px auto 0px auto;
	padding: 20px;
`;

const Home = () => {
	const { id } = useParams();
	const problem = data.find(e => e.id == id);

	return problem ? (
		<Container>
			<Sidebar />
			<Problem problem={problem} />
		</Container>
	) : null;
};

export default Home;
