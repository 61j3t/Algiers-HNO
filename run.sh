#!/bin/bash

# Save the current directory
CURRENT_DIR=$(pwd)

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
