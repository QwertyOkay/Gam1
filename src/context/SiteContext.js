import React, { createContext, useContext } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const siteInfo = {
    siteName: "pin-up-az.dinails.com.ua",
    slogan: "Oyun dünyasına dalın",
    info: "Sizlere en kaliteli oyunları ve olağanüstü oyun deneyimlerini sunmaktayız.",
    thankYouProduct: "Ürünümüze gösterdiğiniz ilgi için teşekkür ederiz.",
    thankYouSubscription: "Abone olduğunuz için teşekkür ederiz.",
    thankYouOrder: "Siparişiniz için teşekkür ederiz.",
  };

  return (
    <SiteContext.Provider value={siteInfo}>
      {children}
    </SiteContext.Provider>
  );
};

// Create a custom hook to use the SiteContext
export const useSite = () => {
  return useContext(SiteContext);
};
