using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Portfolio.Controllers
{
    [Route("")]
    public class HomeController : BaseController
    {
        [Route("")]
        public IActionResult Index()
        {
            CorePage(string.Empty).SetDescription("website for portfolio");

            return View();
        }
        
        [Route("/{option}")]
        public IActionResult Option(string option)
        {
            CorePage(option).SetDescription($"CV template for {option}");

            ViewData["option"] = option;

            return View();
        }

    }
}