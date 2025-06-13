import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid, Box, Button } from "@mui/material";
import Header from "../includes/Header.js";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from "@mui/material";

const columns = [
  { id: "id", label: "Account ID", minWidth: 170, align: "left" },
  { id: "name", label: "Organization Name", minWidth: 170, align: "left" },
  { id: "type", label: "Account Type", minWidth: 170, align: "left" },
  { id: "group", label: "Account Groups", minWidth: 170, align: "left" },
  { id: "status", label: "Status", minWidth: 170, align: "left" },
  { id: "last_modify_by", label: "Last Modified By", minWidth: 170, align: "left" },
  { id: "account_owner", label: "Cloud Account Owner", minWidth: 170, align: "left" },
  { id: "last_modified", label: "Last Modified", minWidth: 170, align: "left" },
  { id: "added_on", label: "Added On", minWidth: 170, align: "left" },
  { id: "account_enabled", label: "Cloud Account Enabled", minWidth: 170, align: "left" },
  { id: "actions", label: "Actions", minWidth: 170, align: "left" },
];

function createData(id, type, group, status,last_modify_by, account_owner, last_modified, added_on, account_enabled, actions) {
  return { id, type, group, status,last_modify_by, account_owner, last_modified, added_on, account_enabled, actions };
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const rows = [
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", <Switch {...label} defaultChecked />, <div><VisibilityIcon/><EditIcon/><DeleteIcon/></div>),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", <Switch {...label} defaultChecked />, <div><VisibilityIcon/><EditIcon/><DeleteIcon/></div>),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", <Switch {...label} defaultChecked />, <div><VisibilityIcon/><EditIcon/><DeleteIcon/></div>),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", <Switch {...label} defaultChecked />, <div><VisibilityIcon/><EditIcon/><DeleteIcon/></div>),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", <Switch {...label} defaultChecked />, <div><VisibilityIcon/><EditIcon/><DeleteIcon/></div>),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", <Switch {...label} defaultChecked />, <div><VisibilityIcon/><EditIcon/><DeleteIcon/></div>),
];

export default function ConfigAWS() {
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
    <div className="ConfigAWS">
      <Header />
      <div style={{ padding: "10px" }}>
        <Box sx={{ flexGrow: 1, paddingBottom: 3, paddingTop: 2 }}>
          <Grid container spacing={2}>
            <Grid item size={2}>
              <Button color="primary" variant="outlined" startIcon={<AddIcon />} onClick={() => alert("Add AWS Account")}>
                Add AWS Account
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Additional content can be added here */}

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
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
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
