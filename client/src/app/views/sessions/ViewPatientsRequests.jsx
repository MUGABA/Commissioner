import { Button, Typography } from '@mui/material';
import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../material-kit/tables/ReUsableTable';

const ViewPatientRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchRequests = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/cares`);

    setRequests(data);
  };

  const redirectToAddRecommendedFood = (item) => {
    navigate(`/dashboard/doctor-give-response/${item.id}`);
  };

  const redirectViewDetails = (item) => {
    navigate(`/dashboard/patient-details/${item.createdBy}`);
  };

  const columns = [
    { name: 'Requester Name', content: (item) => <>{item.User.fullName}</> },
    { name: 'Requester Email', content: (item) => <>{item.User.email}</> },
    { path: 'anyAllergies', name: 'Allergic?' },
    { path: 'allergicFoods', name: 'Allergic Foods' },
    { path: 'beenDiagnosed', name: 'Diagnosed Recently?' },
    { path: 'diagnosedDisease', name: 'Diagnosed Diseases' },
    { path: 'recommendedFoods', name: 'Recommended Foods' },
    { path: 'description', name: 'Description' },

    {
      name: 'Actions',
      content: (item) => (
        <>
          <Button
            onClick={() => {
              redirectToAddRecommendedFood(item);
            }}
          >
            Acton
          </Button>
        </>
      ),
    },

    {
      name: 'Patient Details',
      content: (item) => (
        <>
          <Button
            onClick={() => {
              redirectViewDetails(item);
            }}
          >
            patient Details
          </Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchRequests();
  }, [loading]);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Patient requests
      </Typography>
      <CustomTable columns={columns} data={requests} />
    </>
    // <Container>
    // </Container>
  );
};

export default ViewPatientRequests;
