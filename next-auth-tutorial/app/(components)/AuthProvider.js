"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>
};

export default AuthProvider;

//componente criado para que se reutilizasse codigo de Member em ClientMember depois de logado.
       