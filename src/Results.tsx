import * as React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 5px;

	& thead {
		background: #0a5945;
		color: white;
	}

	& th {
		text-align: right;
		border-bottom: 1px solid #ccc;
		padding: 10px;
		font-weight: normal;
	}

	& th:first-child {
		text-align: left;
	}

	& td {
		text-align: right;
		border-bottom: 1px solid #ccc;
		padding: 10px;
	}

	& td.data {
		font-weight: bold;
	}

	& td:first-child {
		text-align: left;
	}

	& tr:nth-child(even) {
		background: #0a59451a;
	}

	@media print {
		& thead {
			color: black;
		}
	}
`;

function Results({ dose, volume }: { dose: number, volume: number }) {
	const concentration = dose / volume;
	const rates = [50, 100, 150, 200, 250, 300, 350, 400];

	const tableData = rates.map((mgHour, i) => {
	const mlHour = mgHour / concentration;
	const toInfuse = mlHour / 2;
	const elapsed = (i + 1) * 30;
	return {
	  mgHour,
	  mlHour,
	  toInfuse,
	  elapsed
	};
  });

  return (
	<StyledTable>
	  <thead>
		<tr>
			<th>Titration (total time elapsed)</th>
			<th>Infusion Rate (mL/hr)</th>
			<th>Volume to be Infused (mL)</th>
			<th className="noScreen">Complete</th>
		</tr>
		</thead>
		<tbody>
		{
			tableData.map((val, i) => {
				return (
					<tr key={val.mgHour}>
						<td>
							{i + 1} ({val.elapsed} mins)
						</td>
						<td className="data">{Math.round(val.mlHour)}</td>
						<td className="data">{Math.round(val.toInfuse)}</td>
						<td className="noScreen">
							<input type="checkbox" />
						</td>
					</tr>
				);
			})
		}
		</tbody>
	</StyledTable>
  );
}

export default Results;
