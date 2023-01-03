import App from 'next/app';
import '/src/styles/global.scss';
import { ComponentProps, ComponentType } from 'react';
import { wrapper } from '../app/store/store';

type Props = {
  Component: ComponentType,
  pageProps: ComponentProps<any>
}

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async (context) => {
  return {
    pageProps: {
      ...(await App.getInitialProps(context)).pageProps,
    }
  };
});

export default wrapper.withRedux(MyApp);