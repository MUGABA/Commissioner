import { Box, styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { get } from 'lodash';

const StyledTable = styled(Table)(({ theme }) => ({
  width: 0,
  minWidth: '100%',
  overflow: 'auto',
  whiteSpace: 'nowrap',
}));

const renderCell = (item, column) => {
  if (column.content) return column.content(item);
  return get(item, column.path);
};

const CustomTable = ({ columns, data }) => {
  return (
    <Box sx={{ display: 'block', overflowY: 'auto', whiteSpace: 'nowrap' }} component={Table}>
      <StyledTable>
        <TableHead>
          <TableRow>
            {columns.map((column, idx) => (
              <TableCell id={idx} align="center">
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ width: '100%' }}>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column, idx) => (
                <TableCell align="center">{renderCell(item, column)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default CustomTable;
