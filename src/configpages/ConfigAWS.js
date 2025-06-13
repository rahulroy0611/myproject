import * as React from "react";
import Paper from "@mui/material/Paper";
import { Grid, Box, Button } from "@mui/material";
import Header from "../includes/Header.js";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: "id", headerName: "Account ID", width: 170, align: "left" },
  { field: "name", headerName: "Organization Name", width: 170, align: "left" },
  { field: "type", headerName: "Account Type", width: 170, align: "left" },
  { field: "group", headerName: "Account Groups", width: 170, align: "left" },
  { field: "status", headerName: "Status", width: 170, align: "left" },
  { field: "last_modify_by", headerName: "Last Modified By", width: 170, align: "left" },
  { field: "account_owner", headerName: "Cloud Account Owner", width: 170, align: "left" },
  { field: "last_modified", headerName: "Last Modified", width: 170, align: "left" },
  { field: "added_on", headerName: "Added On", width: 170, align: "left" },
  { field: "account_enabled", headerName: "Cloud Account Enabled", align: "center" },
  { field: "actions", headerName: "Actions", align: "center" },
];

function createData(id, name, type, group, status,last_modify_by, account_owner, last_modified, added_on, account_enabled, actions) {
  return { id, name, type, group, status,last_modify_by, account_owner, last_modified, added_on, account_enabled, actions };
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const rows = [
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", "Enabled/Disabled", "Edit"),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", "Enabled/Disabled", "Edit"),
  createData(8934758395, "ABC_Organization", "AWS", "Group1", "Active", "John Doe", "Jane Smith", "2023-10-01", "2023-09-15", "Enabled/Disabled", "Edit"),
];

const paginationModel = { page: 0, pageSize: 5 };

export default function ConfigAWS() {
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
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 50, 100]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </div>
  );
}
