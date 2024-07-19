import os
import json
from http.server import SimpleHTTPRequestHandler, HTTPServer

# class CustomHandler(SimpleHTTPRequestHandler):
#     def do_GET(self):
#         if self.path == '/data':
#             self.send_response(200)
#             self.send_header('Content-type', 'application/json')
#             self.end_headers()
#             files = os.listdir('data')
#             files_list = [{'name': file, 'path': f'/data/{file}'} for file in files]
#             self.wfile.write(bytes(json.dumps(files_list), 'utf-8'))
#         else:
#             super().do_GET()

if __name__ == '__main__':
    PORT = 80
    server_address = ('', PORT)
    # httpd = HTTPServer(server_address, CustomHandler)
    # httpd = HTTPServer(server_address)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f'Serving on port {PORT}')
    httpd.serve_forever()
