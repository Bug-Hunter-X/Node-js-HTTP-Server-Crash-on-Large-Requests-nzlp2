# Node.js HTTP Server Crash on Large Requests

This repository demonstrates a common issue in Node.js HTTP servers: crashing due to large requests exceeding memory limits.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version with request body size limits implemented.

## Bug
The bug stems from the lack of handling for large incoming requests.  The server attempts to buffer the entire request body in memory, leading to a crash if the request is too large. 

## Solution
The solution involves adding limits to the request body size using the `body-parser` middleware or by manually implementing size checks before processing the entire request body. This prevents memory exhaustion and improves the server's robustness.