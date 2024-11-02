import React, { useState } from "react";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const sizes = ["S", "M", "X", "XL", "XXL"];
  const colors = [
    { color: "#8B95F2", name: "Blue" },
    { color: "#F2C94C", name: "Yellow" },
    { color: "#27AE60", name: "Green" },
    { color: "#2F80ED", name: "Dark Blue" },
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setSelectedImages([...selectedImages, ...newImages]);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price</label>
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slug</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">SKU</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea rows="4" className="w-full p-2 border rounded-md" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Stock status
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Available quantity
              </label>
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Images</label>
              <div className="border-2 border-dashed rounded-md p-4">
                <label className="cursor-pointer flex items-center justify-center">
                  <span className="text-sm text-gray-500">
                    Choose product images
                  </span>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.url}
                      alt={`Product ${index + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-white rounded-full p-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Colors</label>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color.color }}
                    onClick={() =>
                      setSelectedColors([...selectedColors, color])
                    }
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sizes</label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`px-3 py-1 border rounded ${
                      selectedSizes.includes(size)
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => {
                      if (selectedSizes.includes(size)) {
                        setSelectedSizes(
                          selectedSizes.filter((s) => s !== size),
                        );
                      } else {
                        setSelectedSizes([...selectedSizes, size]);
                      }
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
