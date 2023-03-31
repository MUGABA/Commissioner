import { useTheme } from '@emotion/react';
import { Box, Card, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios.js';
import url from 'connectionString';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('please add phone number'),
  age: Yup.number().required('please add age'),
  height: Yup.number().required('please add height in meters'),
  weight: Yup.number().required('please add weight in meters'),
  religiousBelieve: Yup.string().nullable('please add religious believes'),
  foodPreference: Yup.string().nullable('please add preferred food'),
  culturalFoods: Yup.string().nullable('please add foods culturally recommended'),
  lifeStyle: Yup.string().nullable('please tell us about your life style'),
  occupation: Yup.string().nullable('please tell what do you do.'),
  physicalActivities: Yup.string().nullable('please tell us if you do any physical activities'),
  location: Yup.string().nullable('please tell us your physical address/location'),
});

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
  } = details;

  const initialValues = {
    phoneNumber: phoneNumber || '',
    age: age || '',
    height: height || '',
    weight: weight || '',
    religiousBelieve: religiousBelieve || '',
    foodPreference: foodPreference || '',
    culturalFoods: culturalFoods || '',
    lifeStyle: lifeStyle || '',
    occupation: occupation || '',
    physicalActivities: physicalActivities || '',
    location: location || '',
  };

  return (
    <Container>
      <Card className="card">
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Add your details here
        </Typography>
        <Grid container>
          <Grid item sm={12} xs={12}>
            <Box p={4} height="100%">
              <Formik
                enableReinitialize
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name="phoneNumber"
                          label="Phone number"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                          onChange={handleChange}
                          helperText={touched.phoneNumber && errors.phoneNumber}
                          error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="number"
                          name="age"
                          label="Please add age"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.age}
                          onChange={handleChange}
                          helperText={touched.age && errors.age}
                          error={Boolean(errors.age && touched.age)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name="height"
                          label="Enter height in meters"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.height}
                          onChange={handleChange}
                          helperText={touched.height && errors.height}
                          error={Boolean(errors.height && touched.height)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="weight"
                          type="number"
                          label="Weight in kilograms"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.weight}
                          onChange={handleChange}
                          helperText={touched.weight && errors.weight}
                          error={Boolean(errors.weight && touched.weight)}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name="religiousBelieve"
                          label="Enter religious believes"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.religiousBelieve}
                          onChange={handleChange}
                          helperText={touched.religiousBelieve && errors.religiousBelieve}
                          error={Boolean(errors.religiousBelieve && touched.religiousBelieve)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="foodPreference"
                          type="text"
                          label="Enter food preferences"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.foodPreference}
                          onChange={handleChange}
                          helperText={touched.foodPreference && errors.foodPreference}
                          error={Boolean(errors.foodPreference && touched.foodPreference)}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name="culturalFoods"
                          label="Enter cultural foods"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.culturalFoods}
                          onChange={handleChange}
                          helperText={touched.culturalFoods && errors.culturalFoods}
                          error={Boolean(errors.culturalFoods && touched.culturalFoods)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="lifeStyle"
                          type="text"
                          label="Please tell us about your life style"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.lifeStyle}
                          onChange={handleChange}
                          helperText={touched.lifeStyle && errors.lifeStyle}
                          error={Boolean(errors.lifeStyle && touched.lifeStyle)}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name="occupation"
                          label="Please tell us about your occupation"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.occupation}
                          onChange={handleChange}
                          helperText={touched.occupation && errors.occupation}
                          error={Boolean(errors.occupation && touched.occupation)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="physicalActivities"
                          type="text"
                          label="Please tell us about your physical activities"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.physicalActivities}
                          onChange={handleChange}
                          helperText={touched.physicalActivities && errors.physicalActivities}
                          error={Boolean(errors.physicalActivities && touched.physicalActivities)}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          name="location"
                          label="Enter location"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.location}
                          onChange={handleChange}
                          helperText={touched.location && errors.location}
                          error={Boolean(errors.location && touched.location)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                    </Grid>
                    {/* <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Submit Details
                    </LoadingButton> */}
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default ViewPatientDetails;
