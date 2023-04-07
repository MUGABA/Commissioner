import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../material-kit/tables/ReUsableTable';

import { Typography } from '@mui/material';
import useAuth from 'app/hooks/useAuth';

const ViewMyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const navigate = useNavigate();

  const fetchRequests = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/cares/personal`);

    setRequests(data);
  };

  const redirectToAddRecommendedFood = (item) => {
    navigate(`/dashboard/doctor-give-response/${item.id}`);
  };

  const columns = [
    { path: 'anyAllergies', name: 'Allergic?' },
    { path: 'allergicFoods', name: 'Allergic Foods' },
    { path: 'beenDiagnosed', name: 'Diagnosed Recently?' },
    { path: 'diagnosedDisease', name: 'Diagnosed Diseases' },
    { path: 'recommendedFoods', name: 'Recommended Foods' },
    { path: 'description', name: 'Description' },
  ];

  useEffect(() => {
    fetchRequests();
  }, [loading]);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Patient requests
      </Typography>
      <CustomTable columns={columns} data={requests} />;
    </>
  );
};

export default ViewMyRequests;
