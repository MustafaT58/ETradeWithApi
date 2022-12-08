using ETradeWithApi.Models;
using ETradeWithApi.Uow;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ETradeWithApi.Entity.Concretes;

namespace ETradeWithApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        IUow _uow;
        UsersModel _model;
        Response _response;
        public AuthController(IUow uow, UsersModel model, Response response)
        {
            _uow = uow;
            _model = model;
            _response = response;
        }

        [HttpPost]
        public Response Register()
        {
            try
            {
                _model.User = new Users();
                _model.Counties = _uow._countyRep.List();
                _response.Error = false;
                _response.Msg = "Kayıt Başarılı";
            }
            catch (Exception ex)
            {
                _response.Error=true;
                _response.Msg = ex.Message;
            }
            
            return _response;
        }
        [HttpGet]
        public List<Users> GetUsers()
        {
            return _uow._usersRep.List();
        }
    }
}
