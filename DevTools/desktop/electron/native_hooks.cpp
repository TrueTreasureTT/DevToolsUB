#include <string>

extern "C" const char* devtools_native_hooks_version() {
    return "devtools-native-hooks 0.1.0";
}

extern "C" bool is_local_development_url(const char* url) {
    if (!url) return false;
    const std::string value(url);
    return value.rfind("http://localhost/", 0) == 0 ||
           value.rfind("http://127.0.0.1/", 0) == 0 ||
           value.rfind("https://localhost/", 0) == 0;
}
