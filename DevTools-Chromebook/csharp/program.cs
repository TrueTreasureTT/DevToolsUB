using System;

namespace DevToolsHelper;

internal static class Program
{
    private static bool IsLocalUrl(string url)
    {
        return url.StartsWith("http://localhost/", StringComparison.OrdinalIgnoreCase)
            || url.StartsWith("http://127.0.0.1/", StringComparison.OrdinalIgnoreCase)
            || url.StartsWith("https://localhost/", StringComparison.OrdinalIgnoreCase);
    }

    private static int CountLines(string text)
    {
        if (string.IsNullOrEmpty(text))
            return 0;

        return text.Split('\n').Length;
    }

    public static void Main()
    {
        Console.WriteLine("DevTools C# helper");
        Console.WriteLine("Version: 1.0.0");
        Console.WriteLine(
            $"Local URL test: {IsLocalUrl("http://localhost:5173/")}"
        );

        var sample = "console.log('hello');\ndocument.title = 'DevTools';";
        Console.WriteLine($"Sample lines: {CountLines(sample)}");
    }
}
