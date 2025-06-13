// CloudAssetInventory.jsx using Material UI
import React, { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import Header from "../includes/Header";
import { Link } from 'react-router-dom';

const awsAssets = [
  {
    name: "EC2 Instance",
    region: "us-east-1",
    tag: "prod",
    risk: "High",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "S3 Bucket",
    region: "us-west-2",
    tag: "backup",
    risk: "Medium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "RDS Instance",
    region: "eu-central-1",
    tag: "db",
    risk: "Low",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

const azureAssets = [
  {
    name: "Azure VM",
    region: "eastus",
    tag: "compute",
    risk: "High",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
  {
    name: "Blob Storage",
    region: "centralus",
    tag: "storage",
    risk: "Medium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
  {
    name: "Azure SQL",
    region: "westeurope",
    tag: "db",
    risk: "Low",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
];

const gcpAssets = [
  {
    name: "Compute Engine",
    region: "us-central1",
    tag: "gce",
    risk: "Medium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_cloud.png",
  },
  {
    name: "Cloud Storage",
    region: "asia-south1",
    tag: "backup",
    risk: "Low",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_cloud.png",
  },
  {
    name: "Cloud SQL",
    region: "australia-southeast1",
    tag: "db",
    risk: "High",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_cloud.png",
  },
];

const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042"];

export default function AssetInventory() {
  const [cloud, setCloud] = useState("AWS");

  const getAssets = () => {
    if (cloud === "AWS") return awsAssets;
    if (cloud === "Azure") return azureAssets;
    if (cloud === "GCP") return gcpAssets;
  };

  const pieData = [
    { name: "Compute", value: 6 },
    { name: "Storage", value: 5 },
    { name: "Database", value: 4 },
    { name: "Network", value: 3 },
  ];

  const barData = [
    { type: "EC2/VMs", AWS: 3, Azure: 2, GCP: 1 },
    { type: "Storage", AWS: 2, Azure: 1, GCP: 1 },
    { type: "Databases", AWS: 1, Azure: 1, GCP: 1 },
  ];

  return (
    <div class="AssetInventory">
      <Header />
        <div style={{ padding: "10px" }}>
      <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
        <Select value={cloud} onChange={(e) => setCloud(e.target.value)} sx={{ minWidth: 120 }}>
          <MenuItem value="AWS">AWS</MenuItem>
          <MenuItem value="Azure">Azure</MenuItem>
          <MenuItem value="GCP">GCP</MenuItem>
        </Select>
      </Box>

      {/* Asset Cards */}
      <Link to="/ec2details" style={{ textDecoration: "none" }}>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {getAssets().map((asset, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card variant="outlined">
              <CardHeader
                title={asset.name}
                action={<img src={asset.logo} alt="logo" width={28} height={28} />}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {asset.region} • Tag: {asset.tag} • Risk: 🔥 {asset.risk}
                </Typography>
                <Typography variant="caption" color="primary">
                  Last Sync: few mins ago
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Link>

      <Divider sx={{ my: 5 }} />

      {/* Analytics Section */}
      <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item size={4} md={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Assets by Type
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item size={4} md={6}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Cloud Provider Asset Comparison
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="AWS" fill="#8884d8" />
                <Bar dataKey="Azure" fill="#82ca9d" />
                <Bar dataKey="GCP" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}
