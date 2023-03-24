import {
  Checkbox,
  FormControl,
  FormGroup,
  FormLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';

import { useState } from 'react';

import { MenuProps, options, useStyles } from './styles';

const MultiSelect = ({ list, displayName, setAttributes, label, selectedFood }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(selectedFood);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === 'all') {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }

    setSelected(value);
    setAttributes(value);
  };

  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <FormControl className={classes.formControl}>
        <Select
          size="small"
          labelId="mutiple-select-label"
          multiple
          value={selected}
          onChange={handleChange}
          renderValue={() => selected.map((item) => `${item[displayName]},`)}
          MenuProps={MenuProps}
        >
          {list.map((option, id) => (
            <MenuItem key={id} value={option} style={{ display: 'flex' }}>
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
              </ListItemIcon>
              <ListItemText primary={option[displayName]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormGroup>
  );
};

export default MultiSelect;
