import React, { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const useWalletContext = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [wallets, setWallets] = useState(() => {
    const storedWallets = localStorage.getItem('wallets');
    return storedWallets ? JSON.parse(storedWallets) : [];
  });

  const setWalletsAndUpdateStorage = (newWallets) => {
    setWallets(newWallets);
    localStorage.setItem('wallets', JSON.stringify(newWallets));
  };

  const updateWalletBalance = (walletName, amount) => {
    const updatedWallets = wallets.map(wallet => {
      if (wallet.name === walletName) {
        return {
          ...wallet,
          balance: wallet.balance - amount, // Kurangi saldo
        };
      }
      return wallet;
    });
    setWalletsAndUpdateStorage(updatedWallets);
  };

  return (
    <WalletContext.Provider value={{ wallets, setWallets: setWalletsAndUpdateStorage, updateWalletBalance }}>
      {children}
    </WalletContext.Provider>
  );
};
