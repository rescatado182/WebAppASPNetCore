using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreProject.Data;
using CoreProject.Services;
using CoreProject.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CoreProject.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private readonly ICoreProjectRepository _repository;

        public AppController(IMailService mailService, ICoreProjectRepository repository)
        {
            _mailService = mailService;
            _repository = repository;
        }


        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us";
            
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if( ModelState.IsValid)
            {
                // Send the email
                _mailService.SendMessage("diego.p@tp.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail sent!";
                ModelState.Clear();
            }

            return View();
        }


        public IActionResult About()
        {
            ViewBag.Title = "About Us";

            return View();
        }
        
        public IActionResult Shop()
        {
            return View();
        }
    }
}