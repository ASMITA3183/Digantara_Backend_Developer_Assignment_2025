// // routes/algorithms.js
// const express = require('express');
// const router = express.Router();
// const { exec } = require('child_process');

// // Binary Search Route
// router.post('/binary-search', (req, res) => {
//     // Extract data from the request body
//     const { array, target } = req.body;

//     // Implement the binary search algorithm
//     const binarySearch = (arr, tgt) => {
//         let left = 0;
//         let right = arr.length - 1;
//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);
//             if (arr[mid] === tgt) {
//                 return mid;
//             } else if (arr[mid] < tgt) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return -1; // Target not found
//     };

//     // Execute the binary search
//     const result = binarySearch(array, target);

//     // Respond with the result
//     res.status(200).json({ index: result });
// });


// // Quick Sort Route
// router.post('/quick-sort', (req, res) => {
//     const { array } = req.body;
//     if (!Array.isArray(array)) {
//         return res.status(400).json({ error: 'Invalid input format' });
//     }

//     const input = `${array.length}\n${array.join(' ')}\n`;
//     const binaryPath = process.platform === 'win32' ? 'src\\executables\\quick_sort.exe' : './src/executables/quick_sort';

//     const process = exec(binaryPath, (error, stdout, stderr) => {
//         if (error) {
//             return res.status(500).json({ error: stderr });
//         }
//         const sortedArray = stdout.trim().split(' ').map(Number);
//         res.json({ sortedArray });
//     });

//     process.stdin.write(input);
//     process.stdin.end();
// });

// // BFS Route
// router.post('/bfs', (req, res) => {
//     const { graph, start } = req.body;
//     if (typeof start !== 'number' || typeof graph !== 'object') {
//         return res.status(400).json({ error: 'Invalid input format' });
//     }

//     let edges = [];
//     let edgeCount = 0;
//     for (let node in graph) {
//         for (let neighbor of graph[node]) {
//             edges.push(`${node} ${neighbor}`);
//             edgeCount++;
//         }
//     }

//     const input = `${edgeCount} ${start}\n${edges.join('\n')}\n`;
//     const binaryPath = process.platform === 'win32' ? 'src\\executables\\bfs.exe' : './src/executables/bfs';

//     const process = exec(binaryPath, (error, stdout, stderr) => {
//         if (error) {
//             return res.status(500).json({ error: stderr });
//         }
//         const bfsTraversal = stdout.trim().split(' ').map(Number);
//         res.json({ bfsTraversal });
//     });

//     process.stdin.write(input);
//     process.stdin.end();
// });

// module.exports = router;
