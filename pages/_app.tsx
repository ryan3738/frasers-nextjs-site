import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            query={pageProps.query}
            variables={pageProps.variables}
            data={pageProps.data}
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH || 'main'}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT)
            )}
            cmsCallback={cms => {
              import('tinacms').then(({ GroupListFieldPlugin }) => {
                cms.fields.add({
                  ...GroupListFieldPlugin,
                  name: 'groupList',
                  Component: props => {
                    const field = {
                      ...props.field,
                      itemProps: item => {
                        return {
                          label: item.name
                        };
                      }
                    };
                    return (
                      <GroupListFieldPlugin.Component
                        {...props}
                        field={field}
                      />
                    );
                  }
                });
              });
            }}
            /**
             * Treat the Global collection as a global form
             */
            // formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
            //   if (formConfig.id === 'getGlobalDocument') {
            //     return createGlobalForm(formConfig);
            //   }

            //   return createForm(formConfig);
            // }}
            {...pageProps}
          >
            {livePageProps => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  );
};

export default App;
