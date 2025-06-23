"use client";

import React from "react";
import { ThemeProvider, CssBaseline, darkTheme } from "@/utils/index";
import Form from "@/components/Form";

const page = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Form />
    </ThemeProvider>
  );
};

export default page;
