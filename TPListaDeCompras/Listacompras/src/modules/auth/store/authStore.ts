import { create } from "zustand";
import { AuthState, Credentials } from "../types";

const HARDCODED_USER = {
    email: "pepe@gmail.com",
    password: "pepePassword23",
};

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,

    login: (credentials: Credentials) => {
        const isValid =
            credentials.email === HARDCODED_USER.email &&
            credentials.password === HARDCODED_USER.password;

        if (isValid) {
            set({
                user: {
                    email: HARDCODED_USER.email,
                },
                isAuthenticated: true,
                error: null,
            });

            return true;
        }

        set({
            error: "Credenciales incorrectas",
            user: null,
            isAuthenticated: false,
        });

        return false;
    },

    logout: () => {
        set({
            user: null,
            isAuthenticated: false,
            error: null,
        });
    },
}));