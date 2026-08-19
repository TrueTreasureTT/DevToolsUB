#include <iostream>
#include <string>
#include <algorithm>

static bool is_local_url(const std::string& url) {
    return url.rfind("http://localhost/", 0) == 0 ||
           url.rfind("http://127.0.0.1/", 0) == 0 ||
           url.rfind("https://localhost/", 0) == 0;
}

static std::size_t count_lines(const std::string& text) {
    if (text.empty()) return 0;
    return 1 + static_cast<std::size_t>(
        std::count(text.begin(), text.end(), '\n')
    );
}

int main() {
    std::cout << "DevTools native helper\\n";
    std::cout << "Version: 1.0.0\\n";
    std::cout << "Local URL test: "
              << (is_local_url("http://localhost:5173/") ? "yes" : "no")
              << "\\n";

    const std::string sample =
        "console.log('hello');\\n"
        "document.title = 'DevTools';";

    std::cout << "Sample lines: "
              << count_lines(sample)
              << "\\n";

    return 0;
}
