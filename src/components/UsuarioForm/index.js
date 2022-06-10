import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputCalendar from "components/InputCalendar";
import Switch from "@mui/material/Switch";
import { FormControlLabel, Input } from "@mui/material";
import { useState } from "react";

export default function UsuarioForm() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="nome"
            label="Nome Completo"
            placeholder="Nome"
            variant="filled"
            sx={{
              background: "#FFFFFF",
              borderRadius: "5px 5px 0px 0px",
              color: "#4a5926",
            }}
          />
          <TextField
            required
            id="email"
            label="E-mail"
            placeholder="devin@hortifruti.com"
            variant="filled"
            sx={{
              background: "#FFFFFF",
              borderRadius: "5px 5px 0px 0px",
              color: "#4a5926",
            }}
          />
        </div>

        <InputCalendar />

        <div className="switch-control">
          <FormControlLabel
            control={<Switch defaultChecked checked={isAdmin} />}
            onChange={(event) => setIsAdmin(event.target.checked)}
            label="É usuário admin?"
          />
        </div>
      </Box>
    </div>
  );
}
