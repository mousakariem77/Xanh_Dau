using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using XanhDau.Models;

namespace XanhDau.Controllers;

public class HomeController : Controller
{

    public HomeController()
    {
      
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult About()
    {
        return View();
    }

    public IActionResult Product()
    {
        return View();
    }

    public IActionResult Contact()
    {
        return View();
    }
}
