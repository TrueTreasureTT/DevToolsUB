#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parent.parent / "web"

class DevToolsHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format, *args):
        print(f"[DevTools] {self.address_string()} - {format % args}")

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Serve the DevTools Chromebook web UI locally."
    )
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=5173)
    args = parser.parse_args()

    server = ThreadingHTTPServer(
        (args.host, args.port),
        DevToolsHandler,
    )

    print(f"Serving {ROOT}")
    print(f"http://{args.host}:{args.port}/index.html")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        server.server_close()

if __name__ == "__main__":
    main()
