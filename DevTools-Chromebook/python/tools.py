#!/usr/bin/env python3
from pathlib import Path

def count_lines(text: str) -> int:
    return 0 if not text else len(text.splitlines())

def is_local_url(url: str) -> bool:
    prefixes = (
        "http://localhost/",
        "http://127.0.0.1/",
        "https://localhost/",
    )
    return url.startswith(prefixes)

if __name__ == "__main__":
    sample = "console.log('hello');\ndocument.title = 'DevTools';"
    print("DevTools Python helper")
    print("Version: 1.0.0")
    print("Sample lines:", count_lines(sample))
    print("Local URL:", is_local_url("http://localhost:5173/"))
