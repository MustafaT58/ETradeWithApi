using ETradeWithApi.Repos.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETradeWithApi.Uow
{
    public interface IUow
    {
        IBasketDetailRep _basketDetailRep { get; }
        IProductsRep _productsRep { get; }
        IUsersRep _usersRep { get; }
        void Commit();
    }
}
