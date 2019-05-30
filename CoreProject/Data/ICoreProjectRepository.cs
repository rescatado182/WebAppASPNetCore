using System.Collections.Generic;
using CoreProject.Data.Entities;

namespace CoreProject.Data
{
    public interface ICoreProjectRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);
        bool SaveAll();

        // Orders Section
        IEnumerable<Order> GetAllOrders(bool includeItems);

        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);
        void AddEntity(object model);
    }
}