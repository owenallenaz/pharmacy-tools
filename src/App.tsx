import * as React from "react";
import { useState } from "react";
import "./App.css";
import Results from "./Results";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledDiv = styled.div`
	& > h1 {
		font-size: 22px;
	}

	& > .inputs {
		margin-bottom: 22px;
	}

	& > .inputs > :first-child {
		margin-right: 12px;
	}

	& .printOnly {
		display: none;
	}

	margin: 0 auto;
	max-width: 800px;
`;

export default function App() {
	const [dose, setDose] = useState("");
	const [volume, setVolume] = useState("500");

	const onChangeDose = function (e: React.ChangeEvent<HTMLInputElement>) {
		setDose(e.target.value);
	};

	const onChangeVolume = function (e: React.ChangeEvent<HTMLInputElement>) {
		setVolume(e.target.value);
	};

	return (
		<StyledDiv className="App">
			<h1>Rituximab First Infusion Calculator</h1>
			<div className="noScreen">
				<p>Patient Name: ________________</p>
				<p>MRN: _________________________</p>
			</div>
			<div className="inputs">
				<TextField
					className="input"
					label="Rituximab Dose (mg)"
					variant="outlined"
					value={dose}
					onChange={onChangeDose}
					autoFocus={true}
				/>
				<TextField
					className="input"
					label="Volume (mL)"
					variant="outlined"
					value={volume}
					onChange={onChangeVolume}
				/>
			</div>

			{
				dose !== "" && volume !== "" &&
				<Results dose={Number(dose)} volume={Number(volume)} />
			}
		</StyledDiv>
	);
}
