import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import CustomTable from '../material-kit/tables/ReUsableTable';
import { Container } from './RegisterDoc';

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
    <Container>
      <CustomTable columns={columns} data={users} />;
    </Container>
  );
};

export default ViewFoods;
