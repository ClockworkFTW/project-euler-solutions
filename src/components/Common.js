import styled from "styled-components";

export const LargeHeader = styled.h1`
	margin-bottom: ${props => props.margin || "60px"};
	font-size: 36px;
	font-weight: 700;
	color: #2d3748;
`;

export const MediumHeader = styled.h2`
	margin-bottom: ${props => props.margin || "30px"};
	font-size: 22px;
	font-weight: 700;
	color: #2d3748;
`;

export const SmallHeader = styled.h3`
	margin-bottom: ${props => props.margin || "10px"};
	font-size: 16px;
	font-weight: 700;
	color: #2d3748;
`;

export const Paragraph = styled.p`
	margin-bottom: 10px;
	font-size: 14px;
	line-height: 22px;
	color: #4a5568;
`;

export const Button = styled.button`
	width: ${props => props.width};
	padding: 10px 0px;
	font-size: 12px;
	font-weight: 700;
	font-family: inherit;
	text-transform: uppercase;
	border-radius: 5px;
	border-top: none;
	border-right: none;
	border-left: none;
	border-bottom: 4px solid #319795;
	outline: none;
	background: #4fd1c5;
	color: #ffffff;
	transition: background ease-in-out 0.2s;
	&:hover {
		cursor: pointer;
		border-top: 2px solid #ffffff;
		border-bottom: 2px solid #319795;
		background: #81e6d9;
	}
	&:active {
		border-top: 4px solid #ffffff;
		border-bottom: none;
	}
	&:disabled {
		opacity: 0.5;
	}
`;
