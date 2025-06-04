# Port configuration constants
BACKEND_PORT = 5001
FRONTEND_PORT = 3000

# Base URLs
BACKEND_BASE_URL = f"http://localhost:{BACKEND_PORT}"
FRONTEND_BASE_URL = f"http://localhost:{FRONTEND_PORT}"

# CORS configuration
ALLOWED_ORIGINS = [
    FRONTEND_BASE_URL,
    "http://127.0.0.1:3000",  # Alternative localhost format
]
