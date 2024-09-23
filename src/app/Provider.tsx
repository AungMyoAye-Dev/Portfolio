"use client";

import React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <NextThemesProvider>{children}</NextThemesProvider>;
};
