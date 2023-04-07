import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  indeterminateColor: {
    color: '#f50057',
  },
  selectAllText: {
    fontWeight: 500,
  },
  selectedAll: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },

  root: {
    width: '100%',
    display: 'flex',
    margin: '.25rem',
    borderRadius: '25px',
  },
  label: {
    width: '20%',
    border: '0.5px solid',
    padding: '10px',
    fontWeight: 'bold',
    borderColor: theme.palette.grey[600],
    borderTopLeftRadius: '.25rem',
    borderBottomLeftRadius: '.25rem',
  },
  value: {
    width: '70%',
    border: '0.5px solid',
    padding: '10px',
    borderColor: theme.palette.grey[600],
    borderTopRightRadius: '.25rem',
    borderBottomRightRadius: '.25rem',
  },
  update: {
    backgroundColor: 'Blue',
    color: 'white',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  variant: 'menu',
};

const options = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export { useStyles, MenuProps, options };
