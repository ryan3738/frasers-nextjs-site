import '../styles/global.css';
import Layout from '../components/Layout';

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
