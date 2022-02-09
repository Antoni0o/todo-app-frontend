import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

import { api } from "../api";
import AuxProps from "../types/AuxProps";

type User = {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  created_at?: Date; 
  todos?: string[]
}

type AuthContextData = {
  signed: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

type AuthResponse = {
  authentication: {
    user: {
      id: string;
      name: string;
      email: string;
      avatar_url: string;
    },
    token: string;
  }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuxProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  async function signIn(email: string, password: string) {
    const response = await api.post<AuthResponse>('/user/login', {
      email,
      password
    });

    const { user, token } = response.data.authentication;

    localStorage.setItem('@todoapp:token', token);

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);

    router.push('/home');
  }

  function signOut() {
    setUser(null);

    localStorage.removeItem('@todoapp:token');

    router.push('/');
  }

  useEffect(() => {
    const token = localStorage.getItem('@todoapp:token');

    if(token && token !== 'undefined') {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get('/user').then(res => {
        setUser(res.data.result.user);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}