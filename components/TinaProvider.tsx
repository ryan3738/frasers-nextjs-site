//@ts-nocheck
import { PropsWithChildren } from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import { TinaCloudCloudinaryMediaStore } from 'next-tinacms-cloudinary';
import Layout from '../components/Layout';
import { TinaCMS } from 'tinacms';

export const TinaProvider = (
  props: PropsWithChildren & { Component; pageProps }
) => {
  const { children, Component, pageProps } = props;

  return (
    <TinaEditProvider
      editMode={
        <TinaCMS
          mediaStore={TinaCloudCloudinaryMediaStore}
          query={pageProps.query}
          variables={pageProps.variables}
          data={pageProps.data}
          clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
          branch={process.env.NEXT_PUBLIC_EDIT_BRANCH || 'main'}
          isLocalClient={Boolean(
            Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT)
          )}
          cmsCallback={cms => {
            import('react-tinacms-editor').then(field => {
              cms.plugins.add(field.MarkdownFieldPlugin);
            });
            import('tinacms').then(({ GroupListFieldPlugin }) => {
              cms.fields.add({
                ...GroupListFieldPlugin,
                name: 'groupList',
                Component: props => {
                  const field = {
                    ...props.field,
                    itemProps: item => {
                      return {
                        ...item,
                        label:
                          item.name ||
                          item.title ||
                          item.label ||
                          item.alt ||
                          item.day
                      };
                    }
                  };
                  return (
                    <GroupListFieldPlugin.Component
                      {...props}
                      // TODO: look for type error of field
                      // @ts-ignore
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
          formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
            if (formConfig.id === 'getGlobalDocument') {
              return createGlobalForm(formConfig);
            }

            return createForm(formConfig);
          }}
          {...pageProps}
        >
          {livePageProps => (
            <Layout data={livePageProps.data?.getGlobalDocument?.data}>
              <Component {...livePageProps} />
            </Layout>
          )}
        </TinaCMS>
      }
    >
      {children}
    </TinaEditProvider>
  );
};
