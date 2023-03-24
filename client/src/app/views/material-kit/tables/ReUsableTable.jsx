import { Box, styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { get } from 'lodash';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const renderCell = (item, column) => {
  if (column.content) return column.content(item);
  return get(item, column.path);
};

const CustomTable = ({ columns, data }) => {
  return (
    <Box width="100%" overflow="auto">
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

        <TableBody>
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
