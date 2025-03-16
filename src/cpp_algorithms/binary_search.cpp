#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Binary Search function
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;  // target not found
}

int main() {
    int n, target;
    
    cin >> n >> target; // Read number of elements and target
    
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    sort(arr.begin(), arr.end()); // Sort array to ensure binary search works correctly

    cout << binarySearch(arr, target) << endl; // Perform binary search
    
    return 0;
}
