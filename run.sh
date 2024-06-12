#!/bin/bash

# Save the current directory
CURRENT_DIR=$(pwd)

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    osascript <<EOF
tell application "Terminal"
    do script "conda activate Algiers-HNO; cd $CURRENT_DIR/server/src; python app.py"
end tell
EOF

    osascript <<EOF
tell application "Terminal"
    do script "cd $CURRENT_DIR/client; npm run dev"
end tell
EOF

elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    gnome-terminal -- bash -c "conda activate Algiers-HNO; cd $CURRENT_DIR/server/src; python app.py; exec bash"
    gnome-terminal -- bash -c "cd $CURRENT_DIR/client; npm run dev; exec bash"

elif [[ "$OSTYPE" == "cygwin" ]] || [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
    # Windows
    powershell.exe -Command "Start-Process powershell.exe -ArgumentList 'conda activate Algiers-HNO; cd $CURRENT_DIR/server/src; python app.py'"
    powershell.exe -Command "Start-Process powershell.exe -ArgumentList 'cd $CURRENT_DIR/client; npm run dev'"
else
    echo "Unsupported OS: $OSTYPE"
fi