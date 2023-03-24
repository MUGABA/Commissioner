import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../material-kit/tables/ReUsableTable';
import { Container } from './RegisterDoc';

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
          <EditIcon
            onClick={() => {
              redirectToAddRecommendedFood(item);
            }}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchRequests();
  }, [loading]);

  return (
    <Container>
      <CustomTable columns={columns} data={requests} />;
    </Container>
  );
};

export default ViewPatientRequests;