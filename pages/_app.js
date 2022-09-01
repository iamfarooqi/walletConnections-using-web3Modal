import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import '../styles/globals.css'


const getLibrary = async (provider) => {
  return new Web3Provider(provider);
};
function MyApp({ Component, pageProps }) {
  return <>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  </>
}

export default MyApp
