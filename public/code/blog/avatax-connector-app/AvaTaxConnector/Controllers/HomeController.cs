using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AvaTaxConnector.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //ViewBag.Message = "AvaTax API V2";

            return View();
        }

        public ActionResult Settings(string txtAccountNumber, string txtAPIKey)
        { 
            if (string.IsNullOrEmpty(txtAccountNumber) || string.IsNullOrEmpty(txtAPIKey))
            {
                txtAccountNumber = ConfigurationManager.AppSettings["AccountNumber"];
                txtAPIKey = ConfigurationManager.AppSettings["APIKey"];
            }
            else
            {
                ConfigurationManager.AppSettings["AccountNumber"] = txtAccountNumber;
                ConfigurationManager.AppSettings["APIKey"] = txtAPIKey;
                ViewBag.Message = "Settings saved.";
            }            
            return View();
        }
    }
}
