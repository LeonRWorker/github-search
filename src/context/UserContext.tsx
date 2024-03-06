import React, { createContext, useState } from 'react';

export const UserContext = createContext<{
  searchedUser: string;
  setSearchedUser: React.Dispatch<React.SetStateAction<string>>;
}>({ searchedUser: '', setSearchedUser: () => '' })

interface IUserProviderProps {
  children: React.ReactNode
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [searchedUser, setSearchedUser] = useState('')
  return <UserContext.Provider value={{ searchedUser, setSearchedUser }}>
    { children }
  </UserContext.Provider>
}