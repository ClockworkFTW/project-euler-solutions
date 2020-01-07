import React, { useState } from "react";
import styled from "styled-components";
import { Prism } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div``;

const Link = styled.a`
	text-decoration: none;
	color: #319795;
`;

const Icon = styled(FontAwesomeIcon)`
	color: ${props => props.color};
`;

const Text = styled.span`
	margin-left: 5px;
`;

const CodeDisplay = ({ code, codepen }) => (
	<Container>
		<Link href={codepen}>
			<Icon icon={faCodepen} />
			<Text>view on codepen</Text>
		</Link>
		<Prism
			language="javascript"
			style={okaidia}
			customStyle={{
				margin: "20px 0px",
				fontSize: "14px",
				borderBottom: "4px solid #1A202C",
				background: "#2e3749"
			}}
		>
			{code}
		</Prism>
	</Container>
);

export default CodeDisplay;
