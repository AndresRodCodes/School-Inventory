import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import React from "react";

const InventoryTableSearch = () => {
  const [tableLabel, setTableLabel] = React.useState("assetTag");
  const handleChange = (event) => {
    setTableLabel(event.target.value);
  };

  return (
    <FormControl>
      <Grid container direction="row" justify="space-between" spacing={1}>
        <Grid item xs={6}>
          <InputLabel id="search-label">Table Label</InputLabel>
          <Select
            labelId="search-label"
            id="search-label"
            value={tableLabel}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="deviceType">Device Type</MenuItem>
            <MenuItem value="manufacture">Manufacture</MenuItem>
            <MenuItem value="model">Model</MenuItem>
            <MenuItem value="assetTag">Asset Tag</MenuItem>
            <MenuItem value="checkedOutTo">Checked out to</MenuItem>
            <MenuItem value="room">Room</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            fullWidth
          />
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default InventoryTableSearch;
