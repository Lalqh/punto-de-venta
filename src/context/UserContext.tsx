import { createContext, useState } from 'react';

type Props = {
    children: React.ReactNode;
};

interface UserContextProps {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextProps>({
    login: false,
    setLogin: () => {}
});

export const UserProvider: React.FC<Props> = ({ children }) => {
    const [login, setLogin] = useState(false);

    return (
        <UserContext.Provider value={{ login, setLogin }}>
            {children}
        </UserContext.Provider>
    );
};