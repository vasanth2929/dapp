import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const Transactions = () => {
  const web3 = useMoralisWeb3Api();
  const { user } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTransactions = async () => {
    const result = await web3.account.getTransactions({
      limit: 5,
      chain: "rinkeby",
      address: user.get("ethAddress"),
    });
    setTransactions(result.result);
    setLoading(false);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <>
        {transactions.map((transaction) => {
          return (
            <a
              href={`https://rinkeby.etherscan.io/tx/${transaction.hash}`}
              className="block text-ellipsis overflow-hidden"
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
