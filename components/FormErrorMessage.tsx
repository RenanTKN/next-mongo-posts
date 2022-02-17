import { Typography } from "@mui/material";

interface FormErrorMessageProps {
  children: string;
}

export default function FormErrorMessage({ children }: FormErrorMessageProps) {
  return (
    <Typography variant="body2" color="error" sx={{ textAlign: "right" }}>
      {children}
    </Typography>
  );
}
