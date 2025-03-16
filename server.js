// const express = require('express');
// const app = express();
// const algorithmRoutes = require('./src/routes/algorithms.js');


// app.use(express.json());
// app.use('/api', algorithmRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Logging function to save API requests
const logRequest = (algorithm, input, output) => {
    const logEntry = { algorithm, input, output, timestamp: new Date() };

    let logs = [];
    try {
        if (fs.existsSync("logs/logs.json")) {
            const fileContent = fs.readFileSync("logs/logs.json", "utf8").trim();
            logs = fileContent ? JSON.parse(fileContent) : []; // Handle empty file
        }
    } catch (error) {
        console.error("Error reading logs.json:", error);
        logs = []; // Reset logs to empty array if error occurs
    }

    logs.push(logEntry);
    fs.writeFileSync("logs/logs.json", JSON.stringify(logs, null, 4));
};


// API Endpoint for Binary Search
app.post("/binary-search", (req, res) => {
    let { arr, target } = req.body;

    // Ensure input is valid
    if (!Array.isArray(arr) || typeof target !== "number") {
        return res.status(400).json({ error: "Invalid input format" });
    }

    // Convert input to string format for C++ program
    const input = `${arr.length} ${target} ${arr.join(" ")}`;
    
    // Path to the compiled binary (adjust for Windows/Linux)
    const binaryPath = "src\\executables\\binary_search.exe";
    //const binaryPath = "./src/executables/binary_search"; // Use binary_search.exe for Windows

    // Execute C++ program
    const process = exec(binaryPath, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }

        let result = parseInt(stdout.trim()); // Parse output from C++
        logRequest("Binary Search", { arr, target }, result); // Log request
        res.json({ index: result }); // Send response
    });

    // Send input to the C++ process
    process.stdin.write(input + "\n");
    process.stdin.end();
});

// Quick Sort API
app.post("/quick-sort", (req, res) => {
    let { arr } = req.body;

    // Ensure input is valid
    if (!Array.isArray(arr)) {
        return res.status(400).json({ error: "Invalid input format" });
    }

    // Convert input to string format for C++ program
    const input = `${arr.length} ${arr.join(" ")}`;

    // Path to the compiled binary (use .exe for Windows)
    const binaryPath = "src\\executables\\quick_sort.exe"; // Windows
    // const binaryPath = "./src/executables/quick_sort"; // Linux/macOS

    // Execute C++ program
    const process = exec(binaryPath, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }

        let sortedArray = stdout.trim().split(" ").map(Number); // Convert output to an array
        logRequest("Quick Sort", { arr }, sortedArray); // Log request
        res.json({ sortedArray }); // Send response
    });

    // Send input to the C++ process
    process.stdin.write(input + "\n");
    process.stdin.end();
});

// BFS API
app.post("/bfs", (req, res) => {
    let { graph, start } = req.body;

    // Ensure input is valid
    if (typeof start !== "number" || typeof graph !== "object") {
        return res.status(400).json({ error: "Invalid input format" });
    }

    // Convert input to string format for C++ program
    let edges = [];
    let edgeCount = 0;
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            edges.push(`${node} ${neighbor}`);
            edgeCount++;
        }
    }

    const input = `${edgeCount} ${start}\n${edges.join("\n")}`;

    // Path to the compiled binary (use .exe for Windows)
    const binaryPath = "src\\executables\\bfs.exe"; // Windows
    // const binaryPath = "./src/executables/bfs"; // Linux/macOS

    // Execute C++ program
    const process = exec(binaryPath, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }

        let bfsTraversal = stdout.trim().split(" ").map(Number); // Convert output to an array
        logRequest("BFS", { graph, start }, bfsTraversal); // Log request
        res.json({ bfsTraversal }); // Send response
    });

    // Send input to the C++ process
    process.stdin.write(input + "\n");
    process.stdin.end();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


