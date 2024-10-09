using Microsoft.AspNetCore.Mvc;

namespace GitHubMarkdownEditor.Controllers;

public class HomeController(ILogger<HomeController> logger) : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
