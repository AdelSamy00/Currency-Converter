import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [from, setFrom] = useState('🇺🇸 USD - United States');
  const [to, setTo] = useState('🇪🇬 EGP - Egypt');
  const [amount, setAmount] = useState('');
  const value = {
    from,
    setFrom,
    to,
    setTo,
    amount,
    setAmount,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
