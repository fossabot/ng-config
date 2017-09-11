using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace ng_config_aspnetcore_sample.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("appsettings.json")]
        public IActionResult GetClientAppSettings()
        {
            return Json(new {Key1 = "value1", Key2 = "value2"});

        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
