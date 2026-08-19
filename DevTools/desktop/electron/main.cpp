// Optional native build entrypoint.
//
// The Electron application itself is launched by desktop/electron/index.js.
// This C++ file is reserved for future native diagnostics helpers; it does
// not implement network filtering, browser policy bypasses, or hidden hooks.

#include <iostream>

int main() {
    std::cout << "DevTools native helper placeholder" << std::endl;
    return 0;
}
