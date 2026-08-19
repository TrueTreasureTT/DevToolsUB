fn is_local_url(url: &str) -> bool {
    url.starts_with("http://localhost/")
        || url.starts_with("http://127.0.0.1/")
        || url.starts_with("https://localhost/")
}

fn count_lines(text: &str) -> usize {
    if text.is_empty() {
        0
    } else {
        text.lines().count()
    }
}

fn main() {
    println!("DevTools Rust helper");
    println!("Version: 1.0.0");

    let url = "http://localhost:5173/";
    println!("Local URL test: {}", is_local_url(url));

    let sample = "console.log('hello');\ndocument.title = 'DevTools';";
    println!("Sample lines: {}", count_lines(sample));
}
