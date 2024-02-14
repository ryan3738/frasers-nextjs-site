import dynamic from 'next/dynamic';
import '../styles/global.css';
import Layout from '../components/Layout';

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

const App = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Layout data={pageProps.data?.getGlobalDocument?.data}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
