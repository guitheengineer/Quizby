import { Route, Redirect } from 'react-router-dom';
import { RouteCustomProps } from 'types';
import Header from 'components/main/header';
import useDocumentTitle from './hooks/useDocumentTitle';
import useVerifyUser from './hooks/useVerifyUser';

const PrivateRoute = ({
  showlogo = true,
  style = {},
  title = 'Quizby',
  component: Component,
  ...rest
}: RouteCustomProps) => {
  useDocumentTitle(title);
  const { isAuthenticated } = useVerifyUser();

  return isAuthenticated ? (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header showlogo={showlogo} style={style} />
          <Component {...props} />
        </>
      )}
    />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );
};

export default PrivateRoute;
