import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery, useTheme } from "@mui/material";

import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CookieIcon from "@mui/icons-material/Cookie";
import LandslideIcon from "@mui/icons-material/Landslide";
import AnimationIcon from "@mui/icons-material/Animation";
import CallIcon from "@mui/icons-material/Call";
import AllOutIcon from "@mui/icons-material/AllOut";
import Link from "next/link";

type Anchor = "left";
type SidebarMobileProps={
  menuProp:number;
  submenuProp:number
}

export default function SidebarMobile({menuProp,submenuProp}:SidebarMobileProps) {
  const [state, setState] = React.useState({ left: false });
  const [open, setOpen] = React.useState(false);
  const [openMenu, setMenu] = React.useState(0);
  const [selectedSubMenu, setSelectedSubMenu] = React.useState(0);

  function LayoutLoad(){
    setMenu(menuProp) 
    setSelectedSubMenu(submenuProp)
    console.log('Menus => '+menuProp)
  }
  React.useInsertionEffect(()=>(
    LayoutLoad()
  ),[menuProp!==0])


  const handleClick = (index: number) => {
    setOpen(index !== openMenu ? true : !open);
    setMenu(index);
  };
  const handleClickStatic = (index: number) => {
    setMenu(index);
    setSelectedSubMenu(0);
  };
  const handleClickSubMenu = (index: number) => {
    setSelectedSubMenu(index);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const ListMenu = [
    {
      menu: { id: 11, name: "DESIGNER", icon: CookieIcon },
      submenu: [
        { id: 1, name: "Mockup", href: "/bd/Mockup" },
        { id: 2, name: "Branding", href: "/bd/Branding" },
        { id: 3, name: "Template", href: "/bd/Template" },
        { id: 4, name: "Flyer", href: "/bd/Flyer" },
        { id: 5, name: "Cartão de Visita", href: "/bd/CartaoVisita" },
      ],
    },
    {
      menu: { id: 22, name: "FOTOS", icon: LandslideIcon },
      submenu: [
        { id: 6, name: "Artística", href: "/bd/Artistica" },
        { id: 7, name: "Retrato", href: "/bd/Retrato" },
        { id: 8, name: "De Rua", href: "/bd/DeRua" },
        { id: 9, name: "FPP", href: "/bd/FPP" },
        { id: 10, name: "Gif", href: "/bd/Gif" },
      ],
    },
    {
      menu: { id: 33, name: "ANIMAÇÃO", icon: AnimationIcon },
      submenu: [
        { id: 11, name: "Romance", href: "/bd/Romance" },
        { id: 12, name: "Ficção", href: "/bd/Ficcao" },
        { id: 13, name: "Dedicatória", href: "/bd/Dedicatoria" },
      ],
    },
    {
      menu: { id: 44, name: "CONTATO", icon: CallIcon },
      submenu: [
        { id: 14, name: "Whatsapp", href: "/bd/Whatsapp" },
        { id: 15, name: "E-mail", href: "/bd/Email" },
        { id: 16, name: "Facebook", href: "/bd/Facebook" },
        { id: 17, name: "Instagram", href: "/bd/Instagram" },
        { id: 18, name: "Telefone", href: "/bd/Telefone" },
      ],
    },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 211 }}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="Brilho-Digital"
        subheader={
          <ListSubheader
            component="div"
            id="Brilho-Digital"
            sx={{ backgroundColor: "#E5E5E5", fontSize: 14, color: "#674141" }}
          >
            Brilho Digital
          </ListSubheader>
        }
      >
        <ListItemButton
          onClick={() => handleClickStatic(0)}
          sx={{
            pt: 0,
            pb: 0,
            bgcolor: openMenu === 0 ? "#CC4D4D" : "",
            color: openMenu === 0 ? "#ffffff" : "",
          }}
        >
          <ListItemIcon sx={{ mr: -3 }}>
            <HomeIcon fontSize="small" />
          </ListItemIcon>

          <Link href="/bd/Home">
            <a
              style={{
                textDecorationLine: "none",
                color: "#454242",
                paddingRight: 120,
              }}
            >
              <ListItemText
                primary="HOME"
                primaryTypographyProps={{ fontSize: 14 }}
              />
            </a>
          </Link>
        </ListItemButton>

        {ListMenu.map((item) => {
          return (
            <>
              <ListItemButton
                onClick={() => handleClick(item.menu.id)}
                sx={{
                  pt: 0,
                  pb: 0,
                  bgcolor: openMenu === item.menu.id ? "#CC4D4D" : "",
                  color: openMenu === item.menu.id ? "#ffffff" : "",
                }}
              >
                <ListItemIcon sx={{ mr: -3 }}>
                  <item.menu.icon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  key={item.menu.id}
                  primary={item.menu.name}
                  primaryTypographyProps={{ fontSize: 14 }}
                />
                {open && openMenu === item.menu.id ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItemButton>
              <Collapse
                in={openMenu === item.menu.id ? open : false}
                timeout="auto"
                unmountOnExit
              >
                {item.submenu.map((i) => {
                  return (
                    <List key={i.id} component="div" disablePadding>
                      <ListItemButton sx={{ padding: 0, display: "block" }}>
                        <Link href={i.href}>
                          <a
                            style={{
                              textDecorationLine: "none",
                              color: "#454242",
                              backgroundColor: "greenyellow",
                            }}
                          >
                            <ListItemText
                              onClick={() => handleClickSubMenu(i.id)}
                              primary={i.name}
                              primaryTypographyProps={{
                                fontSize: 12,
                                color: selectedSubMenu === i.id ? "red" : "",
                                pl: 6,
                                marginTop: "-4px",
                                marginBottom: "-4px",
                                paddingTop: "4px",
                                paddingBottom: "4px",
                              }}
                            />
                          </a>
                        </Link>
                      </ListItemButton>
                    </List>
                  );
                })}
              </Collapse>
            </>
          );
        })}

        <ListItemButton
          onClick={() => handleClickStatic(55)}
          sx={{
            pt: 0,
            pb: 0,
            bgcolor: openMenu === 55 ? "#CC4D4D" : "",
            color: openMenu === 55 ? "#ffffff" : "",
          }}
        >
          <ListItemIcon sx={{ mr: -3 }}>
            <AllOutIcon fontSize="small" />
          </ListItemIcon>
          <Link href="/bd/Sobre">
            <a
              style={{
                textDecorationLine: "none",
                color: "#454242",
                paddingRight: 120,
              }}
            >
              <ListItemText
                primary="BD"
                primaryTypographyProps={{ fontSize: 14 }}
              />
            </a>
          </Link>
        </ListItemButton>
      </List>
    </Box>
  );

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const theme = useTheme();
  const smDownLeft = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer("left", true)}
          edge="start"
          sx={{ marginLeft: 1 }}
        >
          <MenuIcon />
        </IconButton>
        {smDownLeft ? (
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
          >
            {list("left")}
          </SwipeableDrawer>
        ) : (
          ""
        )}
      </React.Fragment>
    </div>
  );
}
