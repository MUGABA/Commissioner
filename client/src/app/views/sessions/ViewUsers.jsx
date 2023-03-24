import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import CustomTable from '../material-kit/tables/ReUsableTable';
import { Container } from './RegisterDoc';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/auth/users`);

    console.log(data);

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
    <Container>
      <CustomTable columns={columns} data={users} />;
    </Container>
  );
};

export default ViewUsers;
