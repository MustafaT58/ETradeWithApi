using ETradeWithApi.Dto;
using ETradeWithApi.Entity.Concretes;
using ETradeWithApi.Http;
using ETradeWithApi.Uow;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETradeWithApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        IUow _uow;
        ApiResponse _apiResponse;

        public CategoriesController(IUow uow, ApiResponse apiResponse)
        {
            _uow = uow;
            _apiResponse = apiResponse;
        }

        [HttpGet]
        public List<Categories> List()        
        {
            return _uow._categoriesRep.List();
        }

        [HttpPost]

        public ApiResponse Create(Categories category)
        {
            try
            {
                _uow._categoriesRep.Add(category);
                _uow.Commit();
                _apiResponse.Error = false;
                _apiResponse.Msg = "Yeni Kategori eklendi";
            }
            catch (Exception)
            {
                _apiResponse.Error = true;
                _apiResponse.Msg = "Kategori ekleme hatası";
            }
            
            return _apiResponse;
        }

        [HttpPut]
        public ApiResponse Edit(Categories category)
        {
            try
            {
                _uow._categoriesRep.Update(category);
                _uow.Commit();

                _apiResponse.Error = false;
                _apiResponse.Msg = "Güncellendi";
            }
            catch (Exception)
            {
                _apiResponse.Error = true;
                _apiResponse.Msg = "güncelleme hatası";
            }

            return _apiResponse;

        }

        [HttpDelete]
        public ApiResponse Delete(Categories category)
        {
            try
            {
                _uow._categoriesRep.Delete(category.Id);
                _uow.Commit();

                _apiResponse.Error = false;
                _apiResponse.Msg = "silindi";
            }
            catch (Exception)
            {
                _apiResponse.Error = true;
                _apiResponse.Msg = "silme hatası";
            }

            return _apiResponse;

        }
    }
}
