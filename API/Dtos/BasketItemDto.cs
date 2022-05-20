using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }
        
        [Required]
        public string productName { get; set; }
        
        [Required]
        [Range(0.1, double.MaxValue, ErrorMessage = "Price must be greather than 0")]
        public decimal Price { get; set; }
        
        [Required]
        [Range(1, double.MaxValue, ErrorMessage = "Quantity must be at least 1")]
        public int Quantity { get; set; }
        
        [Required]
        public string PictureUrl { get; set; }
        
        [Required]
        public string Brand { get; set; }
        
        [Required]
        public string Type { get; set; }
    }
}