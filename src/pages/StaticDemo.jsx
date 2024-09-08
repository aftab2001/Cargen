// import React from 'react';

// const dummyData = {
//   agent: {
//     tasks: [
//       { id: '1', title: 'Static Task 1', description: 'Description for static task 1' },
//       { id: '2', title: 'Static Task 2', description: 'Description for static task 2' },
//     ],
//   },
//   manager: {
//     sales: [
//       { id: '1', item: 'Car A', soldAt: '2024-08-01', commission: 500 },
//       { id: '2', item: 'Car B', soldAt: '2024-08-02', commission: 700 },
//     ],
//   },
//   finance_manager: {
//     reports: [
//       { id: '1', title: 'Financial Report 1', details: 'Details for financial report 1' },
//       { id: '2', title: 'Financial Report 2', details: 'Details for financial report 2' },
//     ],
//   },
//   inventory_manager: {
//     inventory: [
//       { id: '1', item: 'Car A', stock: 10 },
//       { id: '2', item: 'Car B', stock: 5 },
//     ],
//   },
// };

// const StaticDemo = ({ role }) => {
//   return (
//     <div>
//       <h2>Static Dashboard</h2>
//       {role === 'agent' && (
//         <div>
//           <h3>Tasks</h3>
//           {dummyData.agent.tasks.map(task => (
//             <div key={task.id}>
//               <h4>{task.title}</h4>
//               <p>{task.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {role === 'manager' && (
//         <div>
//           <h3>Sales</h3>
//           {dummyData.manager.sales.map(sale => (
//             <div key={sale.id}>
//               <p>Item: {sale.item}</p>
//               <p>Sold At: {sale.soldAt}</p>
//               <p>Commission: ${sale.commission}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {role === 'finance_manager' && (
//         <div>
//           <h3>Reports</h3>
//           {dummyData.finance_manager.reports.map(report => (
//             <div key={report.id}>
//               <h4>{report.title}</h4>
//               <p>{report.details}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {role === 'inventory_manager' && (
//         <div>
//           <h3>Inventory</h3>
//           {dummyData.inventory_manager.inventory.map(item => (
//             <div key={item.id}>
//               <p>Item: {item.item}</p>
//               <p>Stock: {item.stock}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StaticDemo;
import React from 'react'

const StaticDemo = () => {
  return (
    <div>StaticDemo</div>
  )
}

export default StaticDemo