using FriendFinder.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace FriendFinder.Repository.Generic
{
    public interface IRepository<T> where T : IEntity
    {
        IQueryable<T> Find(Expression<Func<T, bool>> filter = null, Func<IIncludable<T>, IIncludable> includes = null);

        T GetById(int id, Func<IIncludable<T>, IIncludable> includes = null);

        List<T> GetList(Expression<Func<T, bool>> filter = null, Func<IIncludable<T>, IIncludable> includes = null);

        void Create(T entity);

        void Update(T entity);

        void Delete(int id, bool forceDelete = true);

        void DeleteAll(IEnumerable<T> entities);
    }
}
