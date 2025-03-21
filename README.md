# Digantara-Backend-Assignment

This project integrates C++ algorithms—**Binary Search**, **Quick Sort**, and **Breadth-First Search (BFS)**—into a Node.js API. Users can interact with these algorithms through HTTP endpoints, allowing efficient execution of computational tasks.&#8203;


## Setup Instructions
### Prerequisites

- **Node.js**: Ensure you have Node.js installed. 
- **C++ Compiler**: A C++ compiler like g++ is required to compile the C++ source files.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/digantara-backend.git
   cd digantara-backend

## Testing
### Prerequisites

- **Postman**:  Install Postman to facilitate API testing. Download it from the Postman website.

### Test cases 
**Binary Search**
1.Open Postman.
2.Select POST request.
3.Enter the URL: http://localhost:3000/binary-search
4.Go to Body → raw → Select JSON format.
5.Enter the following JSON:
   {
       "arr": [10, 20, 30, 40, 50],
       "target": 30
   }
6.Click Send.

**quick sort**
1.Open Postman.
2.Select POST request.
3.Enter the URL: http://localhost:3000/quick-sort
4.Go to Body → raw → Select JSON format.
5.Enter the following JSON:
   {
    "arr": [5, 3, 8, 1, 2]
   }
6.Click Send.

**BFS**
1.Open Postman.
2.Select POST request.
3.Enter the URL: http: http://localhost:3000/bfs
4.Go to Body → raw → Select JSON format.
5.Enter the following JSON:
   {
       "graph": {
           "0": [1, 2],
           "1": [0, 3, 4],
           "2": [0, 5],
           "3": [1],
           "4": [1, 5],
           "5": [2, 4]
       },
       "start": 0
   }
6.Click Send.
