using ETradeWithApi.Dal;
using ETradeWithApi.Repos.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETradeWithApi.Uow
{
    public class Uow : IUow
    {
        TradeContext _db;
        public IBasketDetailRep _basketDetailRep { get; private set; }

        public IProductsRep _productsRep { get; private set; }

        public IUsersRep _usersRep { get; private set; }

        public void Commit()
        {
            _db.SaveChanges();
        }
        public Uow(TradeContext db, IBasketDetailRep basketDetailRep, IProductsRep productsRep, IUsersRep usersRep)
        {
            _db = db;
            _basketDetailRep = basketDetailRep;
            _productsRep = productsRep;
            _usersRep = usersRep;
        }
    }
}
