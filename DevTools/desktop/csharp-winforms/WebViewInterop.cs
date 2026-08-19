using Microsoft.Web.WebView2.Core;
using System.Threading.Tasks;

namespace DevToolsUnblocker;

public static class WebViewInterop
{
    public static async Task InitializeAsync(CoreWebView2 webView)
    {
        await webView.AddScriptToExecuteOnDocumentCreatedAsync(@"
            window.__DEVTOOLS_DESKTOP__ = true;
            console.info('[DevTools] WinForms WebView2 shell initialized');
        ");
    }
}
