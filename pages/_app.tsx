import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import AuthProvider, { useAuth } from '../context/AuthContext';
import Home from '.';

const authRoutes = ['/afliados', '/afiliados/turnosonline'];
const publicRoutes = ['/', '/faq', '/conoceosap'];

function MyApp({ Component: PageComponent, pageProps, router }: AppProps) {
  const { user } = useAuth();

  let Page = PageComponent;

  if (!user && authRoutes.includes(router.route)) {
    Page = Home;
  }

  return (
    <Layout userRole={user?.role}>
      <Page {...pageProps} user={user} />
    </Layout>
  );
}

const withAuthProvider = (Component: React.FC<AppProps>) => {
  return (props: AppProps) => (
    <AuthProvider>
      <Component {...props} />
    </AuthProvider>
  );
};

export default withAuthProvider(MyApp);
