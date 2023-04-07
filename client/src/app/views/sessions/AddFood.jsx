import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, TextField, Typography } from '@mui/material';
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
  name: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Food name id required'),
});

const registerDoc = async (data) => {
  const user = await axios.post(`${url.url}/food`, data);

  return user;
};

const AddFood = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (values) => {
    setLoading(true);

    try {
      await registerDoc(values);
      navigate('/dashboard/view-foods');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card className="card">
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Add Food
        </Typography>
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
                          name="name"
                          label="Food Name"
                          variant="outlined"
                          onBlur={handleBlur}
                          value={values.name}
                          onChange={handleChange}
                          helperText={touched.name && errors.name}
                          error={Boolean(errors.name && touched.name)}
                          sx={{ mb: 3 }}
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
                      Register Food
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

export default AddFood;
