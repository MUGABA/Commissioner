import useAuth from 'app/hooks/useAuth';
import ViewMyRequests from './ViewMyRequests';
import ViewPatientRequests from './ViewPatientsRequests';
import ViewUsers from './ViewUsers';

const ViewAccording = () => {
  const { user } = useAuth();

  if (user.userSide === 'Admin') {
    return <ViewUsers />;
  } else if (user.userSide === 'Patient') {
    return <ViewMyRequests />;
  } else return <ViewPatientRequests />;
};

export default ViewAccording;
