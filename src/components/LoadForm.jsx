import { TextField, Button, Grid, Typography, Box, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import React, { useState } from "react";
import AmortizationTable from "./AmortizationTable";
import { calculateEMI } from "../utils/emiCalculator";
import { getAmortizationSchedule } from "../utils/emiCalculator";


const LoanForm = ({ onCalculate }) => {
  const [loan, setLoan] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [schedule, setSchedule] = useState([]);
  const [emi, setEmi] = useState("");
  const [reset, setRest] = useState(false);
  const [currency, setCurrency] = useState("USD");

  const handleSubmit = () => {

    const emi = calculateEMI(loan, rate, term);
    console.log(emi);
    setEmi(emi);
    const schedule = getAmortizationSchedule(loan, rate, term);
    console.log(schedule);
    setSchedule(schedule);

  };
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleReset = () => {
    setEmi("");
    setSchedule([]);
  };

  return (
    <Box sx={{ marginLeft: 18, marginRight: 18 }}>
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>Loan Calculator Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField label="Loan Amount" value={loan} onChange={e => setLoan(+e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Interest Rate (%)" value={rate} onChange={e => setRate(+e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Term (Years)" value={term} onChange={e => setTerm(+e.target.value)} />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mb: 3, mt: 2 }}>
        <Button variant="contained" onClick={handleSubmit}>
          Calculate
        </Button>
      </Grid>
      {
        emi &&

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Monthly EMI: ${emi}</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, textAlign: "center", alignItems: "center" }}>
              <FormControl sx={{ display: 'flex', width: 85 }}>
                <InputLabel id="currency-select-label">Currency</InputLabel>
                <Select
                  labelId="currency-select-label"
                  id="currency-select"
                  value={currency}
                  label="Currency"
                  onChange={handleChange}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="INR">INR</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h8">converted EMI: ${emi}</Typography>
            </Box>
            <Button variant="outlined" size="small" color="secondary" sx={{ height: 50, px: 2 }} onClick={handleReset}>RESET TABLE</Button>
          </Box>
        </Box>
      }

      {
        schedule && <AmortizationTable schedule={schedule} />
      }
    </Box >);
};

export default LoanForm;
