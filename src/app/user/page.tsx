"use client";

import { Typography } from "@mui/material";
import React from "react";

const page = () => {
  const details = localStorage.getItem("form");
  const { name, email } = details ? JSON.parse(details) : "";

  return (
    <div className="p-4">
      <Typography variant="h3">Welcome👋, {name}</Typography>
      <Typography variant="body1">Email: {email}</Typography>
    </div>
  );
};

export default page;
