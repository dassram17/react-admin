import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import theme from '../../ui/Theme/Theme';

import SimpleLineIcon from 'react-simple-line-icons';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'mobile', label: 'Mobile', minWidth: 100},
  { id: 'appointment_for', label: 'Appointment For', minWidth: 50 },
  {
    id: 'date',
    label: 'Date',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'time',
    label: 'Time',
    minWidth: 50,
    align: 'right',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
  },
];

function createData(name, mobile,appointment_for, date, time, action) {
  return { name, mobile, appointment_for, date, time, action };
}

const rows = [
  createData('Raj','+91-9876543210', 'Dog', '15/Aug/2020', '02:00', <div><IconButton color="secondary"><SimpleLineIcon name="check" /></IconButton> <IconButton style={{color: theme.palette.error.main}}><SimpleLineIcon name="close" /></IconButton></div>),
  createData('Raj','+91-9876543210', 'Dog', '15/Aug/2020', '02:30', <div><IconButton color="secondary"><SimpleLineIcon name="check" /></IconButton> <IconButton style={{color: theme.palette.error.main}}><SimpleLineIcon name="close" /></IconButton></div>),
  createData('Raj','+91-9876543210', 'Dog', '15/Aug/2020', '03:00', 'Approved'),
  createData('Raj','+91-9876543210', 'Dog', '15/Aug/2020', '03:20', 'Rejected'),
  createData('Raj','+91-9876543210', 'Dog', '15/Aug/2020', '04:00', <div><IconButton color="secondary"><SimpleLineIcon name="check" /></IconButton> <IconButton style={{color: theme.palette.error.main}}><SimpleLineIcon name="close" /></IconButton></div>),
  createData('Raj','+91-9876543210', 'Dog', '15/Aug/2020', '05:45', <div><IconButton color="secondary"><SimpleLineIcon name="check" /></IconButton> <IconButton style={{color: theme.palette.error.main}}><SimpleLineIcon name="close" /></IconButton></div>),
];

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  error: {
    color: theme.palette.error.main
  }
});

export default function AppointmentTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead color="primary">
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}