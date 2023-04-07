import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';
const CustomDisplay = ({ label, value }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.label}>{label}</Typography>
      <Typography className={classes.value}>{value}</Typography>
    </Box>
  );
};
export default CustomDisplay;
