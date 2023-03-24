import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { styled } from '@mui/system';
import axios from 'axios.js';
import url from 'connectionString';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import MultiSelect from './MultSelect';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

export const Container = styled(JustifyBox)(() => ({
  width: '90vw',
  '& .card': {
    width: '80vw',
    margin: '1rem',
    borderRadius: 12,
  },
  borderColor: '#1A2038',
}));

const registerDoc = async (data) => {
  const user = await axios.post(`${url.url}/cares/make-request`, data);

  return user;
};

const AskDietHelp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [allergies, setAllergies] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [request, setRequest] = useState({
    anyAllergies: '',
    beenDiagnosed: '',
    diagnosedDisease: '',
    recommendedBy: '',
  });
  const [suggestedFoods, setSuggestedFoods] = useState([]);
  const { requestId } = useParams();

  const fetchFoods = async () => {
    const {
      data: { data },
    } = await axios.get(`${url.url}/food`);

    setFoods(data);
  };

  const fetchFoodDetails = async () => {
    const {
      data: { data },
    } = await axios.get(`/cares//get-single/${requestId}`);

    const selectedFoods = data.allergicFoods.split(',').map((item) => {
      return item.length > 1 ? { name: item } : null;
    });

    selectedFoods.pop();
    setSelectedFoods(selectedFoods);

    setRequest(data);
  };

  const updateData = async (data) => {
    const user = await axios.put(`${url.url}/cares/food-recommended/${requestId}`, data);

    return user;
  };

  const sendRequest = async (data) => {
    if (requestId) await updateData(data);
    else await registerDoc(data);
  };

  useEffect(() => {
    fetchFoodDetails();
    fetchFoods();
  }, []);

  const handleFormSubmit = async (values) => {
    setLoading(true);

    let foodAllergies = '';
    for (const food of allergies) {
      foodAllergies += `${food.name},`;
    }

    let recommendedFoods = '';
    for (const food of allergies) {
      recommendedFoods += `${food.name},`;
    }

    const obj = {
      allergicFoods: foodAllergies,
      recommendedFoods,
      ...values,
    };
    try {
      await sendRequest(obj);
      navigate('/dashboard/view-patient-requests');
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    anyAllergies: Yup.string().required('Select one'),
    beenDiagnosed: Yup.string().required('Select one'),
    diagnosedDisease: Yup.string().nullable(),
    description: Yup.string().nullable(),
  });

  const { anyAllergies, beenDiagnosed, diagnosedDisease } = request;

  return (
    <Container>
      <Card className="card">
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Send Nutrition request
        </Typography>
        <Grid container>
          <Grid item sm={12} xs={12}>
            <Box p={4} height="100%">
              <Formik
                enableReinitialize
                onSubmit={handleFormSubmit}
                initialValues={{
                  anyAllergies: anyAllergies || 'No',
                  beenDiagnosed: beenDiagnosed || 'No',
                  diagnosedDisease: diagnosedDisease || '',
                  description: '',
                }}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        <FormControl sx={{ margin: '1rem 0rem' }}>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Do you have any allergies
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="No"
                            name="anyAllergies"
                            value={values.anyAllergies}
                            onChange={handleChange}
                            sx={{ display: 'flex', flexDirection: 'row' }}
                          >
                            <FormControlLabel value="No" control={<Radio />} label="NO" />
                            <FormControlLabel value="Yes" control={<Radio />} label="YES" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <FormControl sx={{ margin: '1rem 0rem' }}>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Have you been diagnosed recently?
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="No"
                            name="beenDiagnosed"
                            value={values.beenDiagnosed}
                            onChange={handleChange}
                            sx={{ display: 'flex', flexDirection: 'row' }}
                          >
                            <FormControlLabel value="No" control={<Radio />} label="NO" />
                            <FormControlLabel value="Yes" control={<Radio />} label="YES" />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>

                    <Grid container spacing={6}>
                      <Grid item xs={12} lg={6}>
                        {values.anyAllergies === 'Yes' ? (
                          <MultiSelect
                            list={foods}
                            displayName="name"
                            setAttributes={setAllergies}
                            selectedFood={selectedFoods}
                            label="PLease select allergic foods"
                          />
                        ) : (
                          ''
                        )}
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        {values.beenDiagnosed === 'Yes' ? (
                          <TextField
                            fullWidth
                            size="small"
                            name="diagnosedDisease"
                            type="text"
                            label="Please enter diagnosed diseases here."
                            variant="outlined"
                            onBlur={handleBlur}
                            value={values.diagnosedDisease}
                            onChange={handleChange}
                            helperText={touched.diagnosedDisease && errors.diagnosedDisease}
                            error={Boolean(errors.diagnosedDisease && touched.diagnosedDisease)}
                            sx={{ mb: 2 }}
                          />
                        ) : (
                          ''
                        )}
                      </Grid>
                    </Grid>

                    {requestId ? (
                      <Grid container spacing={6}>
                        <Grid item xs={12} lg={6}>
                          <MultiSelect
                            list={foods}
                            displayName="name"
                            setAttributes={setSuggestedFoods}
                            selectedFood={[]}
                            label="Suggest Foods for this patient"
                          />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="description"
                            type="text"
                            label="Please enter description."
                            variant="outlined"
                            onBlur={handleBlur}
                            value={values.description}
                            onChange={handleChange}
                            helperText={touched.description && errors.description}
                            error={Boolean(errors.description && touched.description)}
                            sx={{ mb: 2 }}
                          />
                        </Grid>
                      </Grid>
                    ) : (
                      ''
                    )}

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      {requestId ? 'Give Feed Back' : 'Request Diet Help'}
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

export default AskDietHelp;
