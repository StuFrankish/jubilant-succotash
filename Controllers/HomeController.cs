using Microsoft.AspNetCore.Mvc;

namespace GitHubMarkdownEditor.Controllers;

public class HomeController() : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
