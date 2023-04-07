import { Typography } from '@mui/material';
import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import CustomTable from '../material-kit/tables/ReUsableTable';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/auth/users`);

    setUsers(data);
  };

  const columns = [
    { path: 'fullName', name: 'Full Name' },
    { path: 'email', name: 'Email' },
    { path: 'userSide', name: 'User type' },
    { path: 'levelOfEducation', name: 'Education Level' },
  ];

  useEffect(() => {
    fetchUsers();
  }, [loading]);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        List of users
      </Typography>
      <CustomTable columns={columns} data={users} />;
    </>
  );
};

export default ViewUsers;
