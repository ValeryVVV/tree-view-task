import React from "react";
import PropTypes from 'prop-types';

import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, Typography } from "@mui/material";

const Filter = ({ value, onChange }) => (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Typography variant="h7" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
            Filter by folder name
            <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                type='text'
                value={value}
                onChange={onChange}
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" position="start" />,
                }}
            />
        </Typography>
    </Box>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Filter;
