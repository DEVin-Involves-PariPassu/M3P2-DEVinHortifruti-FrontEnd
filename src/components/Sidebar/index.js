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
import { IoPeopleOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbLemon } from "react-icons/tb";
import Swal from "sweetalert2";
import { useSetRecoilState } from "recoil";
import { signed } from "store/modules/auth/recoil";

export default function Sidebar() {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const setLogado = useSetRecoilState(signed);

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

  const handleConfirm = () => {
    Swal.fire({
      title: "Tem certeza que deseja sair?",
      icon: "warning",
      width: "24rem",
      showCancelButton: true,
      confirmButtonColor: "#36a23f",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        setLogado(false);
        navigate("/");
      }
    });
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
        </List>

        <List disablePadding onClick={() => navigate("/vendas")}>
          {["Vendas"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AiOutlineShoppingCart />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List disablePadding onClick={() => navigate("/produtos")}>
          {["Produtos"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TbLemon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List disablePadding onClick={() => navigate("/usuarios")}>
          {["Usuários"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <IoPeopleOutline />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {["Sair"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FiLogOut onClick={() => handleConfirm()} />
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
            style={{
              width: "200px",
              height: "60px",
            }}
            onClick={toggleDrawer(anchor, true)}
          ></Button>
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
