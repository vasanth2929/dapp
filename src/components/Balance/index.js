import Moralis from "moralis";
import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const Balance = () => {
  const { user } = useMoralis();
  const web3 = useMoralisWeb3Api();
  const [balances, setBalances] = useState();
  const [tokenBalances, setTokenBalances] = useState([]);
  const fetchBalances = async () => {
    try {
      const result = await web3.account.getNativeBalance({
        chain: "rinkeby",
        address: user.get("ethAddress"),
      });
      setBalances(Moralis.Units.FromWei(result.balance));
    } catch (error) {}
  };
  const fetchTokens = async () => {
    try {
      const result = await web3.account.getTokenBalances({
        chain: "rinkeby",
        address: user.get("ethAddress"),
      });
      setTokenBalances(result);
    } catch (error) {}
  };
  useEffect(() => {
    fetchBalances();
    fetchTokens();
  }, []);
  return (
    <div>
      <h3>Balance</h3>
      <p>
        ETH: {balances} <b>ETH</b>
      </p>
      <>
        {tokenBalances.map((token) => {
          return (
            <p key={token.symbol}>
              {Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b>
            </p>
          );
        })}
      </>
    </div>
  );
};
