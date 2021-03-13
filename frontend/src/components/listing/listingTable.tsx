import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 17,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


function createData(_id: string, company: string, position: string, salary: string, createdAt: string) {
    return { _id, company, position, salary, createdAt };
}

const rows = [
    createData('asdie34xcJsdf2', 'Google', 'Front End Engineer', '60k', '1 hour age'),
    createData('asdie34xc66df', 'Tesla', 'Software Engineer', '70k', '2 hours ago'),
    createData('a1e34xcJ12df', 'Uber', 'Back end Developer', '65k', '2 day ago'),
    createData('asdie34123f', 'Microsoft', 'UI/UX ', '45k', '3 day ago'),
];




export interface ListingTableProps {

}

const ListingTable: React.SFC<ListingTableProps> = () => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell component="th" align="center">Company</StyledTableCell>
                        <StyledTableCell component="th" align="center">Position</StyledTableCell>
                        <StyledTableCell component="th" align="center">Salary</StyledTableCell>
                        <StyledTableCell component="th" align="center">Post</StyledTableCell>
                        <StyledTableCell component="th" align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="td" align="center">{row.company}</StyledTableCell>
                                <StyledTableCell component="td" align="center">{row.position}</StyledTableCell>
                                <StyledTableCell component="td" align="center">{row.salary}</StyledTableCell>
                                <StyledTableCell component="td" align="center">{row.createdAt}</StyledTableCell>
                                <StyledTableCell component="td" align="center">Details</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListingTable;