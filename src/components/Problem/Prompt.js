import React from "react";
import styled from "styled-components";

import { Paragraph } from "../Common";

const Container = styled.div`
	margin-bottom: 40px;
	padding-bottom: 10px;
	border-bottom: 1px solid #edf2f7;
`;

const Prompt = ({ prompt }) => (
	<Container>
		{prompt.map(paragraph => (
			<Paragraph>{paragraph}</Paragraph>
		))}
	</Container>
);

export default Prompt;
