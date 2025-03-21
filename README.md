# Job Portal Backend

It is a RESTful API where Users can use :
-Register and Log in using Json Web Token Authentication
-User can post the job openings
-User can apply for the job
-User can fetch the job openings
-Backend is built using Node.js,Express.js,MongoDB,WebSockets.
-Used Rate Limiting where a user can make 100 requests per 15 minutes.
-Tried implementing OPENAI API job recommendation but got a rate limit error due to quota restrictions.
Error Message:RateLimitError: 429 You exceeded your current quota, please check your plan and billing details.

🛠️Authentication:
Method Endpoint Description
POST /api/auth/register -Register a new user
POST /api/auth/login User -login & get token

📌Job Management:
Method Endpoint Description
GET /api/jobs -Fetch all job listings
POST /api/jobs -Post a new job (Employer)
GET /api/jobs/:id -Get job details by ID

📨 Job Applications
Method Endpoint Description
POST /api/applications/apply -Apply for a job
GET /api/applications/:jobId -Get applications for a job
PUT /api/applications/:id -Update application status

Future Enhancements
-AI Powered Job Recommendation
-Email Notification
-Admin Panel
