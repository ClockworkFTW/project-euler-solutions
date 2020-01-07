import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faCheckCircle,
	faQuestionCircle
} from "@fortawesome/free-regular-svg-icons";

import { Button } from "../../Common";

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Status = styled.div`
	margin-left: 30px;
`;

const Info = styled.div`
	display: inline-block;
	margin-right: 10px;
	color: #2d3748;
`;

const Icon = styled(FontAwesomeIcon)`
	color: ${props => props.color};
`;

const Text = styled.span`
	margin-left: 5px;
`;

const CodeExecution = ({ code }) => {
	const [status, setStatus] = useState(null);

	const executeCode = () => {
		try {
			const t0 = performance.now();
			const solution = eval(code);
			const t1 = performance.now();

			const time = t1 - t0;

			console.log(solution);

			setStatus({ pass: true, solution, time: time.toFixed(3) });
		} catch (error) {
			setStatus({ pass: false, solution: "", time: "" });
		}
	};

	return (
		<Container>
			<Button width="50px" onClick={executeCode}>
				run
			</Button>
			{status ? (
				<Status>
					<Info>
						<Icon icon={faCheckCircle} color="" />
						<Text>{status.pass ? "Passed" : "Failed"}</Text>
					</Info>
					<Info>
						<Icon icon={faQuestionCircle} color="" />
						<Text>{status.solution}</Text>
					</Info>
					<Info>
						<Icon icon={faClock} color="" />
						<Text>{status.time}ms</Text>
					</Info>
				</Status>
			) : null}
		</Container>
	);
};

export default CodeExecution;
