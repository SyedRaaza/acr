import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Widget9(props) {
	return (
		<Card className="w-full rounded-8 shadow">
			<div className="p-16 px-4 flex flex-row items-center justify-between">
				<Typography className="h1 px-12">Change logs</Typography>

				<div>
					<IconButton aria-label="more">
						<Icon>more_vert</Icon>
					</IconButton>
				</div>
			</div>

			<table className="simple clickable">
				<thead>
					<tr>
						<th aria-label="title" />
						<th className="text-left">User</th>
						<th className="text-left">Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td className="text-left">Added new assesment</td>
					<td className="text-left">John Doe</td>
					<td className="text-left">28-06-2020</td>
					</tr>
					<tr>
					<td className="text-left">Added new assesment</td>
					<td className="text-left">John Doe</td>
					<td className="text-left">28-06-2020</td>
					</tr>
					<tr>
					<td className="text-left">Added new assesment</td>
					<td className="text-left">John Doe</td>
					<td className="text-left">28-06-2020</td>
					</tr>
					{/* {props.data.rows.map(row => (
						<tr key={row.title}>
							<td>{row.title}</td>
							<td className="text-left">{row.clicks}</td>
							<td className="text-left">{row.conversion}</td>
						</tr>
					))} */}
				</tbody>
			</table>

			<Divider className="card-divider w-full" />

			<div className="p-8 pt-16 flex flex-row items-center">
				<Button>GO TO CAMPAIGNS</Button>
			</div>
		</Card>
	);
}

export default React.memo(Widget9);
