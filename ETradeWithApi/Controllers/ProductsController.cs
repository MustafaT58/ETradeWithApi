using ETradeWithApi.Dal;
using ETradeWithApi.Entity.Concretes;
using ETradeWithApi.Http;
using ETradeWithApi.Uow;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ETradeWithApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        IUow _uow;
        ApiResponse _apiResponse;
        TradeContext _db;

        public ProductsController(IUow uow, ApiResponse apiResponse, TradeContext db)
        {
            _uow = uow;
            _apiResponse = apiResponse;
            _db = db;
        }
        [HttpGet]
        public List<Products> List()
        {
            return _uow._productsRep.List();
        }
        [HttpPost]
        public ApiResponse Create(Products product)
        {
            try
            {
                _uow._productsRep.Add(product);
                _uow.Commit();
                _apiResponse.Error = false;
                _apiResponse.Msg = "Ürün Ekleme Başarılı";
            }
            catch (Exception)
            {
                _apiResponse.Error = true;
                _apiResponse.Msg = "Ürün Ekleme Başarısız";
            }
            return _apiResponse;
        }
        [HttpPut]
        public ApiResponse Update(Products product)
        {
            try
            {
                Products selectedProduct = _db.Set<Products>().FirstOrDefault(x => x.Id == product.Id);
                if (selectedProduct != null)
                {
                    _uow._productsRep.Update(product);
                    _uow.Commit();
                    _apiResponse.Error = false;
                    _apiResponse.Msg = "Ürün Güncelleme Başarılı";
                }
                else
                {
                    _apiResponse.Msg = "Ürün Bulunamadı";
                }

            }
            catch (Exception)
            {

                _apiResponse.Error = true;
                _apiResponse.Msg = "Ürün Güncelleme Başarısız";
            }
            return _apiResponse;
        }
        [HttpDelete]
        public ApiResponse Delete(Products product)
        {
            try
            {
                Products selectedProduct = _db.Set<Products>().FirstOrDefault(x => x.Id == product.Id);
                if (selectedProduct != null)
                {
                    _uow._productsRep.Delete(product.Id);
                    _uow.Commit();
                    _apiResponse.Error = false;
                    _apiResponse.Msg = "Ürün Silme Başarılı";
                }
                else
                {
                    _apiResponse.Msg = "Ürün Bulunamadı";
                }

            }
            catch (Exception)
            {
                _apiResponse.Error = true;
                _apiResponse.Msg = "Ürün Silme Başarısız";
            }
            return _apiResponse;
        }
    }
}
