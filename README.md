# Algiers Healthcare Network Optimisation

**Algiers HNO** is a **website** that will find the **hospital with the specifications you require for in Algiers** and give you **the** **shortest path** to it. This is an **Intro. to AI** school project proposed by Mr. **Ahmed GUESSOUM** at **the Higher National School of AI (ENSIA)**

![1718071733864](image/README/1718071733864.png)

![1718071601344](image/README/1718071601344.png)

## Prerequisites

- Python 3.8+
- Node.js 16+ and npm
- Conda (Anaconda or Miniconda)

## Configuration

Port numbers and API endpoints are centralized in constants files:
- **Frontend**: `client/src/constants/config.ts`
- **Backend**: `server/src/constants.py`
- **Root**: `constants.js` (for shared reference)

Default ports:
- Backend: 5001
- Frontend: 3000

## Installation

### 1. Create and activate a virtual environment

Using conda:
```bash
conda create -n Algiers-HNO python=3.8
conda activate Algiers-HNO
```

Or using venv:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### 2. Install Python dependencies

```bash
cd server
pip install -r requirements.txt
```

### 3. Install Node.js dependencies

```bash
cd ../client
npm install
```

## Usage

You need to run both the backend and frontend servers. Open two terminal windows:

### Terminal 1 - Backend Server

```bash
# Activate your environment
conda activate Algiers-HNO  # or source .venv/bin/activate

# Start the backend server
cd server/src
python app.py
```

The backend server will run on `http://localhost:5001`

### Terminal 2 - Frontend Server

```bash
# Start the frontend development server
cd client
npm run dev
```

The frontend will run on `http://localhost:3000`

Open your browser and navigate to `http://localhost:3000` to use the application.

## Project Structure

```
Algiers-HNO/
├── client/          # Next.js frontend application
│   └── src/
│       └── constants/
│           └── config.ts    # Frontend constants
├── server/          # Flask backend API
│   ├── src/         # Python source files
│   │   └── constants.py    # Backend constants
│   └── data/        # Data files
├── constants.js     # Shared constants reference
├── image/           # README images
└── cache/           # Cache directory
```

## Roadmap

- We are working on providing a better user experience
- Expanding the project to serve all states of Algeria is put into consideration

## Contributing

- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
