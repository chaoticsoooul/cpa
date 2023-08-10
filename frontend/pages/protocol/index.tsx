import { ConnectButton } from '@rainbow-me/rainbowkit';
import SelectRole from '../../components/SelectRole/SelectRole';
import type { NextPage } from 'next';
import {
  useAccount,
} from "wagmi";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

const Protocol: NextPage = () => {
  const { address, connector, isConnected } = useAccount();
  return (
      <>
      <main className={styles.main}>
      {
          !isConnected ? (
              <>
              <div className="flex flex-col items-center">
                  <div className="text-black text-4xl font-bold my-16">
                      Connect to see your campaigns
                  </div>
                  <ConnectButton />
              </div>
              </>
          ) : (
              <>
                  <SelectRole />
              </>)
      }
      </main>
    </>
  );
};

export default Protocol;
