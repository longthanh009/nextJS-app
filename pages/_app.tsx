import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import LayoutPageWeb from '../components/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/instance';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWraper = Component.Layout ?? LayoutPageWeb;
  return (
    <LayoutWraper>
      <SWRConfig value={{fetcher : async(url) => await instance.get(url)}}>
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWraper>
  )
}

export default MyApp
