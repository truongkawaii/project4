using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using Project4.Models;

namespace Project4.RequestBody
{
    // User model
    public class UserBody
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string FullName { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string RePassword { get; set; }
        public IdentityStatus Status { get; set; }
        public Gender Gender { get; set; }
        public int[] RoleIds { get; set; }

        public string CompanyName { get; set; }
        public RecruitmentPosition Position { get; set; }
        public string WorkAddress { get; set; }
        public WorkingType[] WorkingTypes { get; set; }

        public string CV { get; set; }
        public int[] Skills { get; set; }
    }

    public class RoleBody
    {
        public int Id { get; set; }
        public string PositionName { get; set; }
        public string Description { get; set; }
        public IdentityStatus Status { get; set; }
    }

    public class UserProfileBody
    {
        public int Id { get; set; }

        [MaxLength(50, ErrorMessage = "Tên không được vượt quá 50 ký tự")]
        public string FirstName { get; set; }

        [MaxLength(50, ErrorMessage = "Họ không được vượt quá 50 ký tự")]
        public string LastName { get; set; }

        [MaxLength(100, ErrorMessage = "Họ tên không được vượt quá 100 ký tự")]
        public string FullName { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public string Phone { get; set; }

        [MaxLength(500, ErrorMessage = "Nội dung giới thiệu không được vượt quá 500 ký tự")]
        public string Description { get; set; }
        public DateTime? Birthdate { get; set; }
        public Gender Gender { get; set; }
        public string WorkAddress { get; set; }
        public string CV { get; set; }
        public int[] Skills { get; set; }
        public string CompanyName { get; set; }
        public RecruitmentPosition Position { get; set; }
        public WorkingType[] WorkingTypes { get; set; }
        public RecruitmentType RecruitmentType { get; set; }

        public ChangePasswordBody PasswordBody { get; set; }

    }

    public class ChangePasswordBody
    {
        public string Password { get; set; }

        public string NewPassword { get; set; }

        public string RePassword { get; set; }
    }

    public class ResetPasswordBody
    {
        public string Email { get; set; }

        public string Code { get; set; }

        public string NewPassword { get; set; }

        public string RePassword { get; set; }
    }

    public class LoginViewModel
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public bool Remember { get; set; }

    }
    public class Attachment
    {
        public string Url { get; set; }
    }
}