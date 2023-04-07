import { Typography } from '@mui/material';
import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import CustomTable from '../material-kit/tables/ReUsableTable';

const ViewFoods = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/food`);

    setUsers(data);
  };

  const columns = [{ path: 'name', name: 'Food Name' }];

  useEffect(() => {
    fetchUsers();
  }, [loading]);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        View Foods
      </Typography>
      <CustomTable columns={columns} data={users} />;
    </>
  );
};

export default ViewFoods;
