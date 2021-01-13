using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project4.Models

{
    public class Post
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is not null")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Thumbnail is not null")]
        public string Thumbnail { get; set; }

        [Required(ErrorMessage = "Description is not null")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Content is not null")]
        public string Content { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
        public virtual ApplicationUser User { get; set; }

        public PostType PostType {get;set;}

        public DateTime CreatedTime { get; set; }

        public DateTime UpdatedTime { get; set; }

    }

    public enum PostType : byte
    {
        [Display(Name = "Tuyển dụng")]
        Recruitment = 1,

        [Display(Name = "Tin tức")]
        News = 2
    }
}
