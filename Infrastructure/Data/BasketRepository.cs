using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Data
{
    public class BasketRepository : IBasketRepository
    {
        public Task<bool> DeleteBasketAsysnc(string basketId)
        {
            throw new NotImplementedException();
        }

        public Task<CustomerBasket> GetCustomerBasketAsync(string basketId)
        {
            throw new NotImplementedException();
        }

        public Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket)
        {
            throw new NotImplementedException();
        }
    }
}