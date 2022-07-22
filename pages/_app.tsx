/* eslint-disable no-nested-ternary */
import * as React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Portal from 'components/Layout/Portal';
import Script from 'next/script';
import Backdrop from 'components/Base/Backdrop';
import { Toaster } from 'react-hot-toast';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import PageLoader from '../components/Base/PageLoader';
import Layout from '../components/Layout/Layout';

const noLayoutPages = ['/'];

interface CustomAppProps extends AppProps {
  Component: AppProps['Component'] & { auth: boolean };
}

function MyApp({ Component: PageComponent, pageProps: { session, ...pageProps } }: CustomAppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  // const [isRouteChanging, setIsRouteChanging] = useState(false);

  // React.useEffect(() => {
  //   const routeChangeStartHandler = () => setIsRouteChanging(true);

  //   const routeChangeEndHandler = () => setIsRouteChanging(false);

  //   router.events.on('routeChangeStart', routeChangeStartHandler);
  //   router.events.on('routeChangeComplete', routeChangeEndHandler);
  //   router.events.on('routeChangeError', routeChangeEndHandler);
  //   return () => {
  //     router.events.off('routeChangeStart', routeChangeStartHandler);
  //     router.events.off('routeChangeComplete', routeChangeEndHandler);
  //     router.events.off('routeChangeError', routeChangeEndHandler);
  //   };
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Toaster />
          <Script
            strategy="lazyOnload"
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script strategy="lazyOnload">
            {`  
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname,});
            `}
          </Script>
          {noLayoutPages.includes(router.pathname) ? (
            <PageComponent {...pageProps} />
          ) : (
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <PageComponent {...pageProps} />
              </AnimatePresence>
            </Layout>
          )}
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
