// Port configuration constants
export const PORTS = {
    BACKEND: 5001,
    FRONTEND: 3000,
} as const;

// Base URLs
export const BASE_URLS = {
    BACKEND: `http://localhost:${PORTS.BACKEND}`,
    FRONTEND: `http://localhost:${PORTS.FRONTEND}`,
} as const;

// API endpoints
export const API_ENDPOINTS = {
    SOLVE: `${BASE_URLS.BACKEND}/solve`,
} as const;

// Export individual constants for convenience
export const BACKEND_PORT = PORTS.BACKEND;
export const FRONTEND_PORT = PORTS.FRONTEND;
export const BACKEND_URL = BASE_URLS.BACKEND;
export const FRONTEND_URL = BASE_URLS.FRONTEND; 