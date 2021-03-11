import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import FuseLoading from '@fuse/core/FuseLoading';
import React , {useState , useEffect} from 'react';
import { connect } from 'react-redux';

function NewWidget10({at_ck_data}) {

    const[ATCKData , setATCKData] = useState([]);

    useEffect(() => {
        if (at_ck_data.data.data == null) {
            setATCKData(at_ck_data.data.dashboard_data.at_and_ck_activity)
        }
        else {
            setATCKData(at_ck_data.data.data.dashboard_data.at_and_ck_activity)
        }
    },[ATCKData , at_ck_data])

    if(Object.keys(ATCKData).length == 0){
        return (
            <FuseLoading />
        )
    }

	return (
		<Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography color="text-primary" className="text-16">AT&CK Activity Summary</Typography>
			</div>
			<div className="table-responsive">
				<Table className="w-full min-w-full">
					<TableHead>
						<TableRow>
                            <TableCell className="whitespace-nowrap">
									Activity
							</TableCell>
                            <TableCell className="whitespace-nowrap">
									Prevent Capability
							</TableCell>
                            <TableCell className="whitespace-nowrap">
									Detective Capability
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
                        {ATCKData.map((val , key) => (
                            <TableRow key={key}>
                                <TableCell>
                                    <Typography className="">
                                        {val.activity}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography className= {val.prevention == "High" ? "bg-green inline rounded-lg p-4" : val.prevention == "Moderate" ? "bg-yellow inline rounded-lg p-4" : "bg-red inline rounded-lg p-4" }>
                                        {val.prevention}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography className={val.detection == "High" ? "bg-green inline rounded-lg p-4" : val.detection == "Moderate" ? "bg-yellow inline rounded-lg p-4" : "bg-red inline rounded-lg p-4"}>
                                        {val.detection}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}

const mapStateToProps = state => {
    return {
        at_ck_data: state.cisDashboardDataReducer.cisDashboard
    }
}

export default connect(mapStateToProps)(React.memo(NewWidget10));
