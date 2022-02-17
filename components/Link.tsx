import React from "react";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <MuiLink sx={{ textDecoration: "inherit" }}>{children}</MuiLink>
    </NextLink>
  );
}
