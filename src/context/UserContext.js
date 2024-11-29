import React, { createContext, useState, useContext } from 'react';

// Pastikan transaksiPemasukan dan transaksiPengeluaran diinisialisasi sebagai array kosong
export const UserContext = createContext({
  totalPemasukan: 0,
  totalPengeluaran: 0,
  transaksiPemasukan: [],  // Default value as empty array
  transaksiPengeluaran: []  // Default value as empty array
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [totalPengeluaran, setTotalPengeluaran] = useState(0); 

  const updateTotalPengeluaran = (nominal) => {
    setTotalPengeluaran(prevTotal => prevTotal + nominal);
  };

  return (
    <UserContext.Provider value={{ user, setUser, totalPengeluaran, updateTotalPengeluaran }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook untuk menggunakan UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};
