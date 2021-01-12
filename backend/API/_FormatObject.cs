using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Project4.Data;
using Project4.Models;
using Project4.Extensions;

namespace Project4.Api
{
    public partial class BaseController : Controller
    {
        protected IQueryable<object> FormatAccount(IQueryable<ApplicationUser> query)
        {
            return query.Select(item => new
            {
                Id = item.Id,
                UserName = item.UserName,
                Email = item.Email,
                HasPosConnected = item.PosUserId != null,
                item.PosUserId,
                JoinDate = item.JoinDate,
                Phone = item.PhoneNumber,
                Status = item.Status,
                FullName = item.FullName,
                Avatar = item.Avatar,
                Birthdate = item.Birthdate,
                FirstName = item.FirstName,
                LastName = item.LastName,
                Gender = item.Gender,
                Description = item.Description,
                Roles = item.Roles.Select(r => new
                {
                    Id = r.RoleId,
                    Name = r.Role.Name,
                    PositionName = r.Role.PositionName,
                    Status = r.Role.Status
                }).ToList(),
            });
        }
        protected IQueryable<object> FormatUser(IQueryable<ApplicationUser> query)
        {
            return query.Select(item => new
            {
                Id = item.Id,
                HasPosConnected = item.PosUserId != null,
                item.PosUserId,
                UserName = item.UserName,
                Email = item.Email,
                JoinDate = item.JoinDate,
                Phone = item.PhoneNumber,
                Status = item.Status,
                FullName = item.FullName,
                Avatar = item.Avatar,
                Birthdate = item.Birthdate,
                FirstName = item.FirstName,
                LastName = item.LastName,
                Gender = item.Gender,
                Description = item.Description,
                Roles = item.Roles
                    .Select(r => new
                    {
                        Id = r.RoleId,
                        Name = r.Role.Name,
                        PositionName = r.Role.PositionName,
                        Status = r.Role.Status
                    }).ToList()
            });
        }

    }


}