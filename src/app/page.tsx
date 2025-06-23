"use client";

import React from "react";
import { ThemeProvider, CssBaseline, darkTheme } from "@/utils/index";
import Form from "@/components/Form";

const page = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="min-h-screen w-full flex items-center justify-center">
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default page;
