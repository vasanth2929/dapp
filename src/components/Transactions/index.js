import React, { useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useState } from "react/cjs/react.development";

export const Transactions = () => {
  const web3 = useMoralisWeb3Api();
  const { user } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = async () => {
    const result = await web3.account.getTransactions({
      limit: 5,
      chain: "rinkeby",
      address: user.get("ethAddress"),
    });
    setTransactions(result.result);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div>
      <h3>Transactions</h3>
      <>
        {transactions.map((transaction) => {
          return (
            <a
              href={`https://rinkeby.etherscan.io/tx/${transaction.hash}`}
              className="block"
              target="_blank"
              key={transaction.hash}
            >
              {transaction.hash}
            </a>
          );
        })}
      </>
    </div>
  );
};
