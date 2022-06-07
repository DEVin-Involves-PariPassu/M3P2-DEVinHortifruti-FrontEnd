import {React, useState} from "react";
import { InputBase, Paper } from "@mui/material";

import  {BiSearchAlt2} from "react-icons/bi";

function InputSearch({ placeholder }) {
  const [busca, setBusca] = useState("");

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
        sx={{ ml: 1, flex: 1, fontFamily:'Exo', color:'#4A5926' }}
        placeholder={placeholder}
        type={"text"}
        onChange={(e)=> setBusca(e.target.value)}
        value={busca}
      />
      <BiSearchAlt2 size={'20px'}/>
    </Paper>
  );
}

export default InputSearch;
