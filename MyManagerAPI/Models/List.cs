﻿
using System;

using System.ComponentModel.DataAnnotations;


namespace MyManagerAPI.Models
{
    public class List
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool IsPrivate { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsImportant { get; set; }
        [Required]
        [MaxLength(50)]
        public string ListName { get; set; }
    }
}