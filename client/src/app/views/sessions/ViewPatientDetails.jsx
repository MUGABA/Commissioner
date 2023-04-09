import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios.js';
import url from 'connectionString';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomDisplay from './CustomDisplay';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

// const ContentBox = styled(JustifyBox)(() => ({
//   height: '100%',
//   padding: '32px',
//   background: 'rgba(0, 0, 0, 0.01)',
// }));

export const Container = styled(JustifyBox)(() => ({
  width: '90vw',
  '& .card': {
    width: '80vw',
    margin: '1rem',
    borderRadius: 12,
  },
  borderColor: '#1A2038',
}));

export const Container1 = styled(Box)(() => ({
  width: '90vw',
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
  borderColor: '#1A2038',
}));

const registerDoc = async (data) => {
  const user = await axios.post(`${url.url}/patient/add-patient-details`, data);

  return user;
};

const ViewPatientDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    phoneNumber: '',
    age: '',
    height: '',
    weight: '',
    religiousBelieve: '',
    foodPreference: '',
    culturalFoods: '',
    lifeStyle: '',
    occupation: '',
    physicalActivities: '',
    location: '',
    gender: '',
    User: {
      fullName: '',
      email: '',
    },
  });

  const { id } = useParams();

  const fetchDetails = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/patient/patient-details/${id}`);

    if (data) setDetails(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleFormSubmit = async (values) => {
    setLoading(true);

    try {
      await registerDoc(values);
      navigate('/dashboard/view-my-requests');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const {
    phoneNumber,
    age,
    height,
    weight,
    religiousBelieve,
    foodPreference,
    culturalFoods,
    lifeStyle,
    occupation,
    physicalActivities,
    location,
    User: { fullName, email },
    gender,
  } = details;

  return (
    <Container1>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Patient Information
      </Typography>
      <CustomDisplay label="Full Name" value={fullName} />
      <CustomDisplay label="Email" value={email} />
      <CustomDisplay label="Phone number" value={phoneNumber} />
      <CustomDisplay label="Gender" value={gender} />
      <CustomDisplay label="Age" value={age} />
      <CustomDisplay label="Height" value={height} />
      <CustomDisplay label="Weight" value={weight} />
      <CustomDisplay label="Religious Belief" value={religiousBelieve} />
      <CustomDisplay label="Food Preferences" value={foodPreference} />
      <CustomDisplay label="Cultural Foods" value={culturalFoods} />
      <CustomDisplay label="Life Style" value={lifeStyle} />
      <CustomDisplay label="Occupation" value={occupation} />
      <CustomDisplay label="Physical Activities" value={physicalActivities} />
      <CustomDisplay label="location" value={location} />
    </Container1>
  );
};

export default ViewPatientDetails;
