import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const RegisterDoc = Loadable(lazy(() => import('../sessions/RegisterDoc')));
const ViewUsers = Loadable(lazy(() => import('../sessions/ViewUsers')));
const ViewFoods = Loadable(lazy(() => import('../sessions/ViewFoods')));
const AddFood = Loadable(lazy(() => import('../sessions/AddFood')));
const AskDietHelp = Loadable(lazy(() => import('../sessions/AddDietRequest')));
const ViewPatientRequests = Loadable(lazy(() => import('../sessions/ViewPatientsRequests')));
const ViewMyRequests = Loadable(lazy(() => import('../sessions/ViewMyRequests')));

const dashboardRoutes = [
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
  { path: '/dashboard/register-doc', element: <RegisterDoc /> },
  { path: '/dashboard/view-users', element: <ViewUsers /> },
  { path: '/dashboard/add-food', element: <AddFood /> },
  { path: '/dashboard/view-foods', element: <ViewFoods /> },
  { path: '/dashboard/ask-diet-help', element: <AskDietHelp /> },
  { path: '/dashboard/view-patient-requests', element: <ViewPatientRequests /> },
  { path: '/dashboard/view-my-requests', element: <ViewMyRequests /> },
  { path: '/dashboard/doctor-give-response/:requestId', element: <AskDietHelp /> },
];

export default dashboardRoutes;
