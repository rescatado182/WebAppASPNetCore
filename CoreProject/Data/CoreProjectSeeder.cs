﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CoreProject.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace CoreProject.Data
{
    public class CoreProjectSeeder
    {
        private readonly CoreProjectContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<StoreUser> _userManager;

        public CoreProjectSeeder(CoreProjectContext ctx, IHostingEnvironment hosting, UserManager<StoreUser> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();

            StoreUser user = await _userManager.FindByEmailAsync("diego.p@tp.com");

            if( user == null)
            {
                user = new StoreUser()
                {
                    FirstName = "Diego",
                    LastName = "Pinzón",
                    Email = "diego.p@tp.com",
                    UserName = "diego.p@tp.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");

                if( result != IdentityResult.Success )
                {
                    throw new InvalidOperationException("Could not create new user in seeder");
                }

            }


            if( !_ctx.Products.Any() )
            {
                // Need to create sample data
                var filepath    = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json        = File.ReadAllText(filepath);

                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _ctx.Products.AddRange(products);

                var order = _ctx.Orders.Where(o => o.Id == 1).FirstOrDefault();

                if (order != null)
                {
                    order.User = user;

                    order.Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    };
                }

                _ctx.SaveChanges();
            }
        }
    }
}
