import React, { createContext, useContext, useEffect, useState } from "react";
import {useGetUserQuery} from "@/api/lyncs";
import useSignupStore from "@/store/signup";

const authContext = createContext({
    user: null,
    updateUser: () => {
    },
    authenticate: () => {
    },
    resolved: false,
    authenticated: false,
    logout: () => {
    }
});

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={ auth }>{ children }</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

export function useProvideAuth() {
    const { data, updateData } = useSignupStore((state) => state);
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [resolved, setResolved] = useState(false);
    const { refetch } = useGetUserQuery({
        onSuccess: (res) => {
            const user = res.data.data;
            updateData({...data, user: res.data.data})
            authenticate({ user });
        },
        onError: () => logout(),
    })

    const authenticate = (data) => {
        setUser(data?.user);
        setAuthenticated(true);
        setResolved(true);
        if (data.token) localStorage.setItem('token', data.token);
    };

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        updateData({...data, user: null})
        setAuthenticated(false);
        setResolved(true);
        setUser(null);
    };

    const updateUser = (user) => {
        setUser(old => ({ ...old, ...user }));
    }

    const reloadUser = async () => {
        await refetch();
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!authenticated && token) {
            reloadUser();
        }
        else logout();
    }, []);

    return {
        user,
        updateUser,
        authenticate,
        resolved,
        authenticated,
        logout
    };
}
