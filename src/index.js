import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import "reset-css";

import App from "./App";

const GlobalStyle = createGlobalStyle`
    html {
		box-sizing: border-box;
		font-family: 'PT Sans', sans-serif;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
`;

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById("root")
);
