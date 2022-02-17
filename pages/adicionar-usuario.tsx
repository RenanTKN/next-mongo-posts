import { Box, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";

import AddUserForm from "../components/AddUserForm";

const UserAdd: NextPage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Card sx={{ width: 350 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <AddUserForm />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserAdd;
