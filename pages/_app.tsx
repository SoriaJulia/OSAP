import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Portal from 'components/Layout/Portal';
import Backdrop from 'components/Base/Backdrop';
import PageLoader from 'components/Base/PageLoader';
import Layout from '../components/Layout/Layout';

const noLayoutPages = ['/index-login'];

function MyApp({ Component: PageComponent, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  React.useEffect(() => {
    const routeChangeStartHandler = () => setIsRouteChanging(true);

    const routeChangeEndHandler = () => setIsRouteChanging(false);

    router.events.on('routeChangeStart', routeChangeStartHandler);
    router.events.on('routeChangeComplete', routeChangeEndHandler);
    router.events.on('routeChangeError', routeChangeEndHandler);
    return () => {
      router.events.off('routeChangeStart', routeChangeStartHandler);
      router.events.off('routeChangeComplete', routeChangeEndHandler);
      router.events.off('routeChangeError', routeChangeEndHandler);
    };
  }, []);

  return (
    <SessionProvider session={session}>
      {noLayoutPages.includes(router.pathname) ? (
        <PageComponent {...pageProps} />
      ) : (
        <Layout>
          {isRouteChanging ? (
            <Portal>
              <Backdrop show />
              <PageLoader />
            </Portal>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <PageComponent {...pageProps} />
            </AnimatePresence>
          )}
        </Layout>
      )}
    </SessionProvider>
  );
}

export default MyApp;
