const PasswordChange = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log("Password change submitted");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-md p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Change Password</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-lg font-medium mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full p-4 bg-gray-200 border border-gray-400 rounded focus:outline-none focus:border-black transition duration-200"
              placeholder="Enter new password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-4 bg-gray-200 border border-gray-400 rounded focus:outline-none focus:border-black transition duration-200"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-200"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
