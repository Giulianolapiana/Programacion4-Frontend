export interface User {
    email: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
    
    login: (credentials: Credentials) => boolean;
    logout: () => void;
}