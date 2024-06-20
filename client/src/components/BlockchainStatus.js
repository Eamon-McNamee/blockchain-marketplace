import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import '../assets/css/styles.css';

const BlockchainStatus = () => {
  const [networkStatus, setNetworkStatus] = useState('Disconnected');
  const [latestBlock, setLatestBlock] = useState(null);
  const [loading, setLoading] = useState(true);

  const TESTNET = process.env.REACT_APP_TESTNET;
  const API_KEY = process.env.REACT_APP_INFURA_API_KEY;

  useEffect(() => {
    const web3 = new Web3(new Web3.providers.HttpProvider(`https://${TESTNET}.infura.io/v3/${API_KEY}`));

    const checkNetworkStatus = async () => {
      try {
        const isConnected = await web3.eth.net.isListening();
        if (isConnected) {
          setNetworkStatus('Connected');
        } else {
          setNetworkStatus('Disconnected');
        }
      } catch (error) {
        console.error('Error connecting to blockchain:', error);
        setNetworkStatus('Disconnected');
      }
    };

    const fetchLatestBlock = async () => {
      try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log('Latest block number:', blockNumber); // Log the block number
        setLatestBlock(blockNumber.toString()); // Convert BigInt to string
      } catch (error) {
        console.error('Error fetching block number:', error);
      }
    };

    checkNetworkStatus();
    fetchLatestBlock();

    const intervalId = setInterval(fetchLatestBlock, 10000); // Fetch latest block every 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [TESTNET, API_KEY]);

  return (
  <div className="blockchain-status">
      <h2>Blockchain Status</h2>
      <p>Network: {TESTNET}</p>
      <p>
        Network Status: {networkStatus}
        {networkStatus === 'Connected' && <span className="dot connected"></span>}
        {networkStatus === 'Disconnected' && <span className="dot disconnected"></span>}
      </p>
      <p>Latest Block Number: {latestBlock || 'Loading...'  }</p>
    </div>
  );
};

export default BlockchainStatus;

