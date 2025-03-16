#include <iostream>
#include <vector>
#include <queue>
#include <map>
using namespace std;

// BFS function to traverse the graph
vector<int> bfs(map<int, vector<int>>& graph, int start) {
    queue<int> q;
    vector<int> result;
    map<int, bool> visited;

    q.push(start);
    visited[start] = true;

    while (!q.empty()) {
        int node = q.front();
        q.pop();
        result.push_back(node);

        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                q.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
    return result;
}

int main() {
    int edges, start;
    cin >> edges >> start;  // Read number of edges and starting node

    map<int, vector<int>> graph;
    for (int i = 0; i < edges; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u); // Undirected graph
    }

    // Ensure all nodes exist in the map
    for (const auto& pair : graph) {
        int node = pair.first;
        if (graph.find(node) == graph.end()) {
            graph[node] = {};
        }
    }

    vector<int> traversal = bfs(graph, start);

    for (int node : traversal) {
        cout << node << " ";
    }
    cout << endl;

    return 0;
}
