import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function InputCalendar() {
  const [dtNascimento, setDtNascimento] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture
        placeholder="dd/mm/aaaa"
        label="Data de Nascimento"
        openTo="day"
        views={["day", "month", "year"]}
        value={dtNascimento}
        onChange={(newDtNascimento) => {
          setDtNascimento(newDtNascimento);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
