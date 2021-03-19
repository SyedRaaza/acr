import React , {useState , useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import FuseLoading from '@fuse/core/FuseLoading';

const ISOControlsTable = ({tableData}) => {

    useEffect(() => {
       
    },[tableData])

    const summyDataForISMSTable = [
        {
            status: "Unknown",
            meaning: "Has not even been checked yet.",
            PIR: "74%",
            PIS: "93%"
        },
        {
            status: "Nonexistent",
            meaning: "Complete lack of recognizable policy, procedure, control etc.",
            PIR: "7%",
            PIS: "1%"
        },
        {
            status: "Initial",
            meaning: "Development has barely started and will require significant work to fulfill the requirements.",
            PIR: "4%",
            PIS: "1%"
        },
        {
            status: "Limited",
            meaning: "Development has barely started and will require significant work to fulfill the requirements.",
            PIR: "4%",
            PIS: "1%"
        },
        {
            status: "Defined",
            meaning: "Development is more or less complete although detail is lacking and/or it is not yet implemented, enforced and actively supported by top management.",
            PIR: "7%",
            PIS: "1%"
        },
        {
            status: "Managed",
            meaning: "Development has barely started and will require significant work to fulfill the requirements.",
            PIR: "0%",
            PIS: "2%"
        },
        {
            status: "Optimized",
            meaning: "Development has barely started and will require significant work to fulfill the requirements.",
            PIR: "0%",
            PIS: "2%"
        },
        {
            status: "Not Applicable",
            meaning: "Development has barely started and will require significant work to fulfill the requirements.",
            PIR: "4%",
            PIS: "0%"
        },
    ]
    return(
        <Paper className="w-full rounded-8 shadow">
			<div className="flex items-center justify-between px-16 h-64 border-b-1">
				<Typography color="text-primary" className="text-16">ISMS & Controls Status</Typography>
			</div>
			<div className="table-responsive">
				<Table className="w-full min-w-full">
					<TableHead>
						<TableRow>
                            <TableCell className="whitespace-nowrap font-bold">
									Status
							</TableCell>
                            <TableCell className="whitespace-nowrap font-bold">
									Meaning
							</TableCell>
                            <TableCell >
									Proportion of ISMS Requirements
							</TableCell>
                            <TableCell >
									Proportion of IS Controls
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
                        {tableData.map((val , key) => (
                            <TableRow key={key}>
                                <TableCell>
                                    <Typography className="">
                                        {val.status}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography className="">
                                        {val.meaning}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography className={val.detection == "High" ? "bg-green inline rounded-lg p-4" : val.detection == "Moderate" ? "bg-yellow inline rounded-lg p-4" : "bg-red inline rounded-lg p-4"}>
                                        {val.PIR}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography className={val.detection == "High" ? "bg-green inline rounded-lg p-4" : val.detection == "Moderate" ? "bg-yellow inline rounded-lg p-4" : "bg-red inline rounded-lg p-4"}>
                                        {val.PIS}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
					</TableBody>
				</Table>
			</div>
		</Paper>
    );
};

export default React.memo(ISOControlsTable);