# Job Portal Backend

It is a RESTful API where Users can use :
-Register and Log in using Json Web Token Authentication
-User can post the job openings
-User can apply for the job
-User can fetch the job openings
-Used Rate Limiting where a user can make 100 requests per 15 minutes.
-Tried implementing OPENAI API job recommendation but got a rate limit error due to quota restrictions.
Error Message:RateLimitError: 429 You exceeded your current quota, please check your plan and billing details.

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JWT
Testing: Thunder Client
Deployment: Render


🔗 API Endpoints
Authentication
🔹 POST /api/auth/register - Register a new user
🔹 POST /api/auth/login - Login and get JWT

Jobs
🔹 GET /api/jobs - Get all job listings
🔹 POST /api/jobs - Create a new job (Authenticated)
🔹 PUT /api/jobs/:id - Update a job (Authenticated)
🔹 DELETE /api/jobs/:id - Delete a job (Authenticated)

AI-Powered Job Recommendations
🔹 GET /api/jobs/recommendations - Get AI-generated job recommendations(It is not working as expected because of rate limit error due to quota restrictions)


Deployment:
Deployed on Render.
https://jobportall-3ww3.onrender.com
-Email Notification
-Admin Panel

 Live Demo
🚀 Backend API Base URL: Job Portal Backend

🔗 API Endpoints
Authentication
POST https://jobportall-3ww3.onrender.com/api/auth/register - Register a new user
POST https://jobportall-3ww3.onrender.com/api/auth/login - Login and get JWT
Jobs
GET https://jobportall-3ww3.onrender.com/api/jobs - Get all job listings
POST https://jobportall-3ww3.onrender.com/api/jobs - Create a new job (Authenticated)
PUT https://jobportall-3ww3.onrender.com/api/jobs/:id - Update a job (Authenticated)
DELETE https://jobportall-3ww3.onrender.com/api/jobs/:id - Delete a job (Authenticated)
