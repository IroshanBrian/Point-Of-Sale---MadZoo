import { useState } from 'react';

const UserLogin = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [loading, setLoading] = useState(false);

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          try {
               // Replace with your authentication logic
               // const response = await loginUser({ email, password });
               // Handle response
          } catch (error) {
               console.error('Login failed:', error);
               // Optionally display an error message to the user
          } finally {
               setLoading(false);
          }
     };

     return (
          <div className="p-4 max-w-md mx-auto">
               <h1 className="text-2xl font-bold mb-4">User Login</h1>
               <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                         <label className="block text-gray-700" htmlFor="email">Email:</label>
                         <input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="border p-2 w-full rounded"
                              required
                         />
                    </div>
                    <div>
                         <label className="block text-gray-700" htmlFor="password">Password:</label>
                         <input
                              id="password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="border p-2 w-full rounded"
                              required
                         />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
                         {loading ? 'Logging in...' : 'Login'}
                    </button>
               </form>
          </div>

     );
};

export default UserLogin;

