// Port configuration constants
const PORTS = {
    BACKEND: 5001,
    FRONTEND: 3000
};

// Base URLs
const BASE_URLS = {
    BACKEND: `http://localhost:${PORTS.BACKEND}`,
    FRONTEND: `http://localhost:${PORTS.FRONTEND}`
};

// API endpoints
const API_ENDPOINTS = {
    SOLVE: `${BASE_URLS.BACKEND}/solve`
};

// Export for both CommonJS (Node.js) and ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    // CommonJS export (for Node.js/backend)
    module.exports = {
        PORTS,
        BASE_URLS,
        API_ENDPOINTS
    };
}

// ES6 export (for frontend)
if (typeof window !== 'undefined') {
    window.APP_CONSTANTS = {
        PORTS,
        BASE_URLS,
        API_ENDPOINTS
    };
}

export { PORTS, BASE_URLS, API_ENDPOINTS }; 