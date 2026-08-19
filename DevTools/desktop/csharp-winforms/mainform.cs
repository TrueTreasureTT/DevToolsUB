using System;
using System.Windows.Forms;
using Microsoft.Web.WebView2.WinForms;

namespace DevToolsUnblocker;

public sealed class MainForm : Form
{
    private readonly WebView2 _webView = new()
    {
        Dock = DockStyle.Fill
    };

    public MainForm()
    {
        Text = "DevTools Overlay";
        Width = 1400;
        Height = 900;
        MinimumSize = new System.Drawing.Size(900, 650);

        Controls.Add(_webView);
        Shown += MainForm_Shown;
    }

    private async void MainForm_Shown(object? sender, EventArgs e)
    {
        await _webView.EnsureCoreWebView2Async();

        _webView.CoreWebView2.NavigationStarting += (_, args) =>
        {
            if (!IsLocalDevelopmentUrl(args.Uri))
            {
                args.Cancel = true;
            }
        };

        await WebViewInterop.InitializeAsync(_webView.CoreWebView2);

        var distPath = System.IO.Path.GetFullPath(
            System.IO.Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "..", "dist", "src", "index.html")
        );

        if (System.IO.File.Exists(distPath))
        {
            _webView.Source = new Uri(distPath);
        }
        else
        {
            _webView.Source = new Uri("http://localhost:5173/src/index.html");
        }
    }

    private static bool IsLocalDevelopmentUrl(string uri)
    {
        return Uri.TryCreate(uri, UriKind.Absolute, out var parsed)
            && (parsed.Host.Equals("localhost", StringComparison.OrdinalIgnoreCase)
                || parsed.Host.Equals("127.0.0.1"));
    }
}
