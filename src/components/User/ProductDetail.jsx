import React, { useState } from 'react';
import icons from '../../utils/utils'; // Assuming you have your icons in this path
import { Heart } from 'lucide-react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [mainImage, setMainImage] = useState(icons.image2); // Set initial main image

  // Sample product data
  const product = {
    name: 'Classic Monochrome T-Shirt',
    images: [icons.image2, icons.image2, icons.image2, icons.image2], // Replace with actual image sources
    rating: 4.5,
    inStock: true,
    description: 'A classic t-shirt made from 100% cotton for ultimate comfort.',
    colors: ['#8B4513', '#000000', '#F5DEB3'], // Brown, Black, and Nude (Wheat color)
    sizes: ['S', 'M', 'L', 'XL'],
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Handle zoom effect
  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
      {/* Left Side - Thumbnail Images */}
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(image)}
            style={{
              width: '60px',
              height: '60px',
              marginBottom: '10px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: mainImage === image ? '2px solid black' : '1px solid #ddd',
            }}
          />
        ))}
      </div>

      {/* Center - Main Product Image with zoom effect */}
      <div
        style={{
          flex: 0.7,
          marginRight: '40px',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img
          src={mainImage}
          alt={product.name}
          style={{
            width: '100%',
            borderRadius: '8px',
            transition: 'transform 0.3s ease',
            transform: isZoomed ? `scale(1.5)` : 'scale(1)',
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        />
      </div>

      {/* Right Side - Product Details */}
      <div style={{ flex: 1.3, padding: '0 10px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>{product.name}</h2>
        
        <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0' }}>
          <span style={{ fontSize: '18px', marginRight: '10px' }}>
            ⭐ {product.rating} ({product.rating >= 4.5 ? 'Excellent' : 'Good'})
          </span>
          <span style={{ fontSize: '16px', color: product.inStock ? 'green' : 'red' }}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        
        <p style={{ fontSize: '14px', margin: '15px 0', color: '#555' }}>{product.description}</p>

        <div style={{ margin: '20px 0' }}>
          <h4 style={{ marginBottom: '10px' }}>Available Colors:</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {product.colors.map((color) => (
              <span
                key={color}
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  backgroundColor: color,
                  borderRadius: '50%',
                }}
              ></span>
            ))}
          </div>
        </div>

        <div style={{ margin: '20px 0' }}>
          <h4 style={{ marginBottom: '10px' }}>Available Sizes:</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {product.sizes.map((size) => (
              <span
                key={size}
                style={{
                  padding: '5px 10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '5px 10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }}>
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            style={{
              width: '50px',
              textAlign: 'center',
              border: '1px solid #ddd',
              borderRadius: '5px',
              margin: '0 10px',
            }}
          />
          <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '5px 10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px' }}>
            +
          </button>
        </div>

        {/* Divider Line */}
        <hr style={{ margin: '20px 0', border: '1px solid #ddd' }} />

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', flex: 1 }}>
            Add to Cart
          </button>

          <button
            onClick={handleAddToWishlist}
            style={{
              padding: '10px 20px',
              border: '1px solid black',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Heart fill={isWishlisted ? 'red' : 'none'} color={isWishlisted ? 'red' : 'black'} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
            {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
