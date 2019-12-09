using FriendFinder.Entities.Data;
using System;

namespace FriendFinder.Repository.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        int Commit();

        ApplicationDbContext GetDbContext();
    }
}
