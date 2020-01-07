import React from "react";
import styled from "styled-components";

import { MediumHeader, Paragraph } from "../../Common";
import CodeDisplay from "./CodeDisplay";
import CodeExecution from "./CodeExecution";

const Container = styled.div``;

const Explaination = styled.div`
	margin-bottom: 30px;
`;

const Solution = ({ solution }) => (
	<Container>
		<MediumHeader>Solution: {solution.value}</MediumHeader>
		<Explaination>
			{solution.explaination.map(paragraph => (
				<Paragraph>{paragraph}</Paragraph>
			))}
		</Explaination>
		<CodeDisplay code={solution.code} codepen={solution.codepen} />
		<CodeExecution code={solution.code} />
	</Container>
);

export default Solution;
