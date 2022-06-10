import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";

import { IoExitOutline, IoPeopleOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbLemon } from "react-icons/tb";

export default function Sidebar() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="sidebar">
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <div className="logo-sidebar"></div>
          {["Vendas", "Produtos", "Usuários"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <AiOutlineShoppingCart
                      onClick={() => navigate("/vendas")}
                    /> : true} 
                  {index === 1 ? (
                    <TbLemon onClick={() => navigate("/produtos")} />
                  ) : true}
                  {index === 2 ? (
                    <IoPeopleOutline onClick={() => navigate("/vendas")} />
                  ) : (
                    true
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>          
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Sair"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IoExitOutline onClick={() => navigate("/")} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="logo-sidebar"
            style={{
              marginTop: "30px",
              marginLeft: "50px",
              color: "transparent",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
