# LAN File Sharing

This project sets up a simple file-sharing web server that allows users to download files over a local network. The server is implemented using Python and serves files from the `data` directory.

## Features

- Displays a list of files available for download.
- Prompts users to download files instead of viewing them directly in the browser.

## Prerequisites

- Python 3.x installed on your machine.

## Directory Structure

Ensure your project directory is structured as follows:


```your/project
├── data
│   ├── file1.txt
│   ├── file2.exe2.exe
│   └── ...
├── index.html
├── script.js
├── style.css
├── server.py
└── logo.png
```
└── logo.png


- **`data/`**: Directory containing the files to be shared.
- **`index.html`**: Main HTML file for the web interface.
- **`script.js`**: JavaScript file to dynamically fetch and display files.
- **`style.css`**: CSS file for styling the web page.
- **`File_server.py`**: Python script to run a custom HTTP server.
- **`logo.png`**: Optional logo image to be displayed on the web page.

## Running the Server

1. **Start the Server**:

   Open a terminal or command prompt and navigate to the directory containing `File_server.py`. Run the following command to start the server:

   ```bash
   python File_server.py
   ```

   or 

   ```bash
   python -m http.server 80
   ```

   This command starts an HTTP server on port 80. Ensure no other services are using port 80 on your machine.

2. **Access the Web Page**:

   Open a web browser and go to the following URL:

   `http://<Your-Local-IP-Address>`

   Replace `<Your-Local-IP-Address>` with your actual local IP address. You can find your local IP address using commands like `ipconfig` (Windows) or `ifconfig` (Linux/Mac).

```sh
   python File_server.py
   ```
   or 

   ```sh
   python -m http.server 80
   ```



To start the HTTP server on port 80, ensure that no other services are using port 80 on your machine.

To access the web page, open a web browser and go to the following URL:

`http://<Your-Local-IP-Address>`

Replace `<Your-Local-IP-Address>` with your actual local IP address. You can find your local IP address using commands like `ipconfig` (Windows) or `ifconfig` (Linux/Mac).

**Usage:**
- View Files: The web page will display a list of files available for download.
- Download Files: Click on a file link to download it. The file will be prompted for download rather than displayed in the browser.

**Troubleshooting:**
- Files Not Showing: Ensure the `data` directory contains files and that the `server.py` script is running correctly.