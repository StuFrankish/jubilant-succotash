using Microsoft.AspNetCore.Mvc;

namespace GitHubMarkdownEditor.Controllers;

public class Samples : Controller
{
    public IActionResult MarkdownEditor()
    {
        return View();
    }
}
