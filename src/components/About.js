import React from "react";
import styled from "styled-components";

import { MediumHeader, Paragraph } from "./Common";

const Container = styled.div`
	max-width: 1040px;
	margin: 60px auto 60px auto;
	padding: 20px;
`;

const About = () => (
	<Container>
		<MediumHeader>What is Project Euler?</MediumHeader>
		<Paragraph>
			Project Euler is a series of challenging mathematical/computer
			programming problems that will require more than just mathematical
			insights to solve. Although mathematics will help you arrive at
			elegant and efficient methods, the use of a computer and programming
			skills will be required to solve most problems.
		</Paragraph>
		<Paragraph>
			The motivation for starting Project Euler, and its continuation, is
			to provide a platform for the inquiring mind to delve into
			unfamiliar areas and learn new concepts in a fun and recreational
			context.
		</Paragraph>
	</Container>
);

export default About;
