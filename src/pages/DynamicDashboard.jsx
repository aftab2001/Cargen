// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../hooks/AuthProvider';


// const DynamicDashboard = () => {
//   const { user } = useContext(AuthContext);
//   const [tasks, setTasks] = useState([]);
//   const [sales, setSales] = useState([]);
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [tasksResponse, salesResponse, customersResponse] = await Promise.all([
//           axios.get('/api/employee/tasks'),
//           axios.get('/api/employee/sales'),
//           axios.get('/api/employee/customers')
//         ]);  

//         setTasks(tasksResponse.data);
//         setSales(salesResponse.data);
//         setCustomers(customersResponse.data);
//       } catch (error) {
//         console.error('Error fetching data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Dynamic Dashboard</h2>
//       {user.role === 'agent' && (
//         <div>
//           <h3>Tasks</h3>
//           {tasks.map(task => (
//             <div key={task.id}>
//               <h4>{task.title}</h4>
//               <p>{task.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {user.role === 'manager' && (
//         <div>
//           <h3>Sales</h3>
//           {sales.map(sale => (
//             <div key={sale.id}>
//               <p>Item: {sale.item}</p>
//               <p>Sold At: {sale.soldAt}</p>
//               <p>Commission: ${sale.commission}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {user.role === 'finance_manager' && (
//         <div>
//           <h3>Reports</h3>
//           {/* Display financial reports */}
//         </div>
//       )}
//       {user.role === 'inventory_manager' && (
//         <div>
//           <h3>Inventory</h3>
//           {/* Display inventory management */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DynamicDashboard;
import React from 'react'

const DynamicDashboard = () => {
  return (
    <div>DynamicDashboard</div>
  )
}

export default DynamicDashboard
