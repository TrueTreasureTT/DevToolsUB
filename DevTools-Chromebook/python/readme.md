[README.md](https://github.com/user-attachments/files/31238744/README.md)
# DevTools Overlay — Chromebook Multi-Language Pack

This ZIP contains separate implementations/components in C++, C#, Python, and Rust.

## Layout

- `cpp/` — native C++ helper
- `csharp/` — .NET console/helper project
- `python/` — local development HTTP server
- `rust/` — Rust CLI helper
- `extension/` — Chrome/Chromium Manifest V3 extension
- `web/` — standalone HTML interface

The language folders are intentionally independent. They can be used as native helpers around the browser development overlay.

## Chromebook notes

ChromeOS Linux (Crostini) can run Python, Rust, C++, and .NET when Linux development is enabled and the required SDKs are installed.

The Chrome extension should be loaded through `chrome://extensions` on devices where unpacked extensions are allowed.

This project is intended for local development/debugging of pages you control. It does not implement bypassing school/work filters, administrator policies, authentication, DRM, or other access controls.
