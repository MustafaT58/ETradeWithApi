using ETradeWithApi.Models;
using ETradeWithApi.Uow;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ETradeWithApi.Entity.Concretes;
using Newtonsoft.Json;
using ETradeWithApi.Http;

namespace ETradeWithApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        IUow _uow;
        UsersModel _model;
        ApiResponse _apiResponse;

        public AuthController(IUow uow, UsersModel model, ApiResponse apiResponse)
        {
            _uow = uow;
            _model = model;
            _apiResponse = apiResponse;
        }
           

        [HttpPost]

        public ApiResponse Register(Users user)
        {

           var newUser  = _uow._usersRep.CreateUser(user);
            if (newUser.Error == true)
            {
               _apiResponse.Error = true;
                _apiResponse.Msg = $"{newUser.EntityName} mevcut";
                 
            }
            else
            {
                newUser.Role = "User";
                _uow._usersRep.Add(newUser);
                _uow.Commit();

                _apiResponse.Error = false;
                _apiResponse.Msg = $"{newUser.EntityName} yaratıldı";
            }
            return _apiResponse;    

        }

        //[HttpGet]
        //public IActionResult Login()
        //{
        //    return Ok();
        //}
        //[HttpPost]
        //public IActionResult Login(string Mail,string Password)
        //{
        //    var user = _uow._usersRep.Login(Mail, Password);    
        //    if (user.Error == false)
        //    {
        //        HttpContext.Session.SetString("User", JsonConvert.SerializeObject(user));
        //        return Ok(user);
        //    }
        //}




        [HttpGet]
        public List<Users> GetUsers()
        {
            return _uow._usersRep.List();
        }



    }
}
