import React from "react";
import { InputBase, Paper } from "@mui/material";

import  {BiSearchAlt2} from "react-icons/bi";

function InputBusca({ placeholder, onChange }) {
  return (
    <Paper
      elevation={3}
      className="container busca"
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "Filtrar por..." }}
        type={"text"}
        onChange={onChange}
      />
      <BiSearchAlt2 />
    </Paper>
  );
}

export default InputBusca;
