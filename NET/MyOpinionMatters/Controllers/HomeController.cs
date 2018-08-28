using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyOpinionMatters.Models;

namespace MyOpinionMatters.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Rewards()
        {
            ViewData["Message"] = "Your rewards page.";

            return View();
        }

        public IActionResult Faq()
        {
            ViewData["Message"] = "Your FAQ page.";

            return View();
        }

        public IActionResult News()
        {
            ViewData["Message"] = "Your News page.";

            return View();
        }

        public IActionResult TermsAndConditions()
        {
            ViewData["Message"] = "Your T&C page.";

            return View();
        }

        public IActionResult PrivacyPolicy()
        {
            ViewData["Message"] = "Your privacy page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
