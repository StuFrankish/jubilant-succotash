using ColorCode.Styling;
using Markdig;
using Markdown.ColorCode;
using Microsoft.AspNetCore.Mvc;

namespace GitHubMarkdownEditor.Controllers;

public class MarkdownPreviewHandler : Controller
{
    [HttpPost]
    public IActionResult BuildPreview(string markdown)
    {
        // Use a markdown parser to convert the markdown to HTML
        if (string.IsNullOrWhiteSpace(markdown))
        {
            return Json(new { previewHtml = "Nothing to preview" });
        }

        // Use the Markdig library to convert markdown to HTML
        // Configure the pipeline with all advanced extensions active
        var pipeline = new MarkdownPipelineBuilder()
            .UseAdvancedExtensions()
            .UseColorCode(styleDictionary: StyleDictionary.DefaultLight)
            .Build();

        var markdownText = Markdig.Markdown.ToHtml(markdown, pipeline);

        return Json(new { previewHtml = markdownText ?? "Something went wrong..." });
    }

}