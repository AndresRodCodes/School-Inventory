import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core"
import FormControl from '@material-ui/core/FormControl';
import React from 'react'

const InventoryTableSearch = () => {
    const [tableLabel, setTableLabel] = React.useState('');
    const handleChange = (event) => {
        setTableLabel(event.target.value);
    }

    return(
        <div>
            <FormControl>
                <InputLabel id='search-label'>Table Label</InputLabel>
                <Select
                    labelId='search-label'
                    id='search-label'
                    value={tableLabel}
                    onChange={handleChange}
                    >
                    <MenuItem value='deviceType'>Device Type</MenuItem>
                    <MenuItem value='manufacture'>Manufacture</MenuItem>
                    <MenuItem value='model'>Model</MenuItem>
                    <MenuItem value='assetTag'>Asset Tag</MenuItem>
                    <MenuItem value='checkedOutTo'>Checked out to</MenuItem>
                    <MenuItem value='room'>Room</MenuItem>
                </Select>
                <TextField id="standard-search" label="Search field" type="search" />
            </FormControl>
        </div>
    )
}

export default InventoryTableSearch