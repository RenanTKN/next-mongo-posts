import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Description as DescriptionIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  NoteAdd as NoteAddIcon,
  PersonAddAlt as PersonAddAltIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

interface MenuItemsProps {
  icon: React.ReactNode;
  text: string;
  path: string;
}

const MenuItems: MenuItemsProps[] = [
  { icon: <HomeIcon />, text: "Home", path: "/" },
  {
    icon: <PersonAddAltIcon />,
    text: "Adicionar Usuário",
    path: "/adicionar-usuario",
  },
  { icon: <NoteAddIcon />, text: "Adicionar Post", path: "/adicionar-post" },
  { icon: <PersonIcon />, text: "Usuários", path: "/users" },
  { icon: <DescriptionIcon />, text: "Posts", path: "/posts" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" passHref>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  flexGrow: 1,
                  color: "inherit",
                  textDecoration: "inherit",
                }}
              >
                MongoDB Fórum
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor={"left"} open={open} onClose={closeDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <List>
            {MenuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => router.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
