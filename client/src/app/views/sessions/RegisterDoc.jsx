import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, TextField } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios.js';
import url from 'connectionString';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const initialValues = {
  email: '',
  password: '',
  fullName: '',
  userSide: 'Admin',
  levelOfEducation: '',
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name id required'),
  userSide: Yup.string().nullable(),
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
  levelOfEducation: Yup.string().required("PLease enter leader's level of education"),
});

const registerDoc = async (data) => {
  const user = await axios.post(`${url.url}/auth/patient-doc`, data);

  return user;
};

const RegisterDoc = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values) => {
    setLoading(true);

    try {
      await registerDoc(values);
      navigate('/dashboard/view-users');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card className="card">
        <Grid container>
          <Grid item sm={12} xs={12}>
            <Box p={4} height="100%">
              <Formik
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
                          name="fullName"
                          label="Full Name"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.fullName}
                          onChange={handleChange}
                          helperText={touched.fullName && errors.fullName}
                          error={Boolean(errors.fullName && touched.fullName)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          type="email"
                          name="email"
                          label="Email"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.email}
                          onChange={handleChange}
                          helperText={touched.email && errors.email}
                          error={Boolean(errors.email && touched.email)}
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
                          name="levelOfEducation"
                          label="level of education"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.levelOfEducation}
                          onChange={handleChange}
                          helperText={touched.levelOfEducation && errors.levelOfEducation}
                          error={Boolean(errors.levelOfEducation && touched.levelOfEducation)}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="password"
                          type="password"
                          label="Password"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={handleChange}
                          helperText={touched.password && errors.password}
                          error={Boolean(errors.password && touched.password)}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                    </Grid>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Register Doctor
                    </LoadingButton>
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

export default RegisterDoc;
