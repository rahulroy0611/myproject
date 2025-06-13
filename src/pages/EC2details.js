import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Header from '../includes/Header.js';
import { Paper } from "@mui/material";

const columns = [
    {
        field: "account_id",
        headerName: "Account ID",
        width: 170,
        align: "left"
    },
    {
        field: "instance_id",
        headerName: "Instance ID",
        width: 170,
        align: "left"
    },
    {
        field: "instance_type",
        headerName: "Instance Type",
        width: 170,
        align: "left"
    },
    {
        field: "instance_state",
        headerName: "Instance State",
        width: 170,
        align: "left"
    },
    {
        field: "private_ip",
        headerName: "Private IP",
        width: 170,
        align: "left"
    },
    {
        field: "public_ip",
        headerName: "Public IP",
        width: 170,
        align: "left"
    },
    {
        field: "availability_zone",
        headerName: "Availability Zone",
        width: 170,
        align: "left"
    },
    {
        field: "instance_name",
        headerName: "Instance Name",
        width: 170,
        align: "left"
    },
    {
        field: "launch_time",
        headerName: "Launch Time",
        width: 170,
        align: "left"
    },
    {
        field: "region",
        headerName: "Region",
        width: 170,
        align: "left"
    },
    {
        field: "vpc_id",
        headerName: "VPC ID",
        width: 170,
        align: "left"
    },
    {
        field: "subnet_id",
        headerName: "Subnet ID",
        width: 170,
        align: "left"
    },
    {
        field: "security_groups",
        headerName: "Security Groups",
        width: 170,
        align: "left"
    },
    {
        field: "os_name",
        headerName: "OS Name",
        width: 170,
        align: "left"
    },
    {
        field: "os_version",
        headerName: "OS Version",
        width: 170,
        align: "left"
    },
    {
        field: "allowd_ports",
        headerName: "Allowed Ports",
        width: 170,
        align: "left"
    },
    {
        field: "public_open_ports",
        headerName: "Public Open Ports",
        width: 170,
        align: "left"
    },
    {
        field: "metadata_version",
        headerName: "Metadata Version",
        width: 170,
        align: "left"
    },
    {
        field: "ssm_status",
        headerName: "SSM Status",
        width: 170,
        align: "left"
    },
    {
        field: "eos",
        headerName: "EOS",
        width: 170,
        align: "left"
    },
    {
        field: "eol",
        headerName: "EOL",
        width: 170,
        align: "left"
    },
    {
        field: "patching_status",
        headerName: "Patching Status",
        width: 170,
        align: "left"
    }
]
const rows = [
    createData(10001, 10001, "t2.micro", "running", "10.0.0.1", "54.123.45.67", "us-west-2a", "web-server-1", "2023-01-01T12:00:00Z", "us-west-2", "vpc-12345678", "subnet-12345678", "sg-12345678", "Ubuntu", "20.04", "22,80,443", "22,80,443", "2.0", "Active", "2025-01-01", "2028-01-01", "Patched"),
    createData(10002, 10002, "t2.micro", "running", "10.0.0.2", "54.123.45.68", "us-west-2b", "web-server-2", "2023-01-02T12:00:00Z", "us-west-2", "vpc-12345678", "subnet-12345678", "sg-12345678", "Ubuntu", "20.04", "22,80,443", "22,80,443", "2.0", "Active", "2025-01-01", "2028-01-01", "Patched"),
    createData(10003, 10003, "t2.micro", "running", "10.0.0.3", "54.123.45.69", "us-west-2c", "web-server-3", "2023-01-03T12:00:00Z", "us-west-2", "vpc-12345678", "subnet-12345678", "sg-12345678", "Ubuntu", "20.04", "22,80,443", "22,80,443", "2.0", "Active", "2025-01-01", "2028-01-01", "Patched"),
    createData(10004, 10004, "t2.micro", "running", "10.0.0.4", "54.123.45.70", "us-west-2c", "web-server-4", "2023-01-04T12:00:00Z", "us-west-2", "vpc-12345678", "subnet-12345678", "sg-12345678", "Ubuntu", "20.04", "22,80,443", "22,80,443", "2.0", "Active", "2025-01-01", "2028-01-01", "Patched"),
]
const paginationModel = { page: 0, pageSize: 10 };

function createData (account_id,instance_id,instance_type,instance_state,private_ip,public_ip,availability_zone,instance_name,launch_time,region,vpc_id,subnet_id,security_groups,os_name,os_version,allowd_ports,public_open_ports,metadata_version,ssm_status,eos,eol,patching_status){
    return {account_id,instance_id,instance_type,instance_state,private_ip,public_ip,availability_zone,instance_name,launch_time,region,vpc_id,subnet_id,security_groups,os_name,os_version,allowd_ports,public_open_ports,metadata_version,ssm_status,eos,eol,patching_status};
}

export default function EC2details() {
    return (
        <div className="ConfigAWS">
            <Header />
            <div style={{ padding: "5px" }}>
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