import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [from, setFrom] = useState({
    code: 'USD - United States',
    flag: 'https://flagcdn.com/w320/us.png',
  });
  const [to, setTo] = useState({
    code: 'EGP - Egypt',
    flag: 'https://flagcdn.com/w320/eg.png',
  });
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(0);
  const value = {
    from,
    setFrom,
    to,
    setTo,
    amount,
    setAmount,
    result,
    setResult,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
