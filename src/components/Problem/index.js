import React from "react";
import styled from "styled-components";

import Prompt from "./Prompt";
import Pagination from "./Pagination";
import Solution from "./Solution";

const Container = styled.div`
	height: 100%;
	margin-left: 260px;
`;

const Problem = ({ problem }) => {
	const { id, title, prompt, solution } = problem;
	return (
		<Container>
			<Pagination title={title} id={id} />
			<Prompt prompt={prompt} />
			<Solution solution={solution} />
		</Container>
	);
};

export default Problem;
