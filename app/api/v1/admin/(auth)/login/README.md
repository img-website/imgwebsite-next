# Admin Login API Documentation

## Endpoint
```
POST /api/v1/admin/login
```

## Overview
This API endpoint handles admin authentication. It validates credentials and returns a JWT token for subsequent authenticated requests.

## Request Format
Send the request as JSON with the following fields:

```javascript
{
  "email": "john@example.com",    // Required, registered email
  "password": "password123"       // Required, admin password
}
```

## Features

### 1. Authentication
- Email and password validation
- JWT token generation
- Last login tracking
- Account status check

### 2. Security
- Password comparison using bcrypt
- JWT token with 24-hour expiry
- Rate limiting
- Input validation

### 3. Response Format
```javascript
{
  success: true,
  message: "Login successful",
  data: {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    mobileNumber: "1234567890",
    profileImage: "/uploads/profile-123.webp",
    role: "admin",
    accountStatus: "active",
    lastLogin: "2024-04-01T...",
    // ... other fields
  },
  token: "eyJhbGciOiJIUzI1NiIs..."
}
```

## Error Cases
1. Invalid credentials
   ```javascript
   {
     success: false,
     error: "Invalid email or password"
   }
   ```

2. Account not found
   ```javascript
   {
     success: false,
     error: "Admin account not found"
   }
   ```

3. Account inactive
   ```javascript
   {
     success: false,
     error: "Account is inactive"
   }
   ```

4. Missing fields
   ```javascript
   {
     success: false,
     error: "Email and password are required"
   }
   ```

## Testing
1. Using Postman:
   - Create new POST request
   - URL: `http://localhost:3000/api/v1/admin/login`
   - Select "raw" and "JSON" in Body
   - Add email and password

2. Example cURL:
   ```bash
   curl -X POST http://localhost:3000/api/v1/admin/login \
   -H "Content-Type: application/json" \
   -d '{
     "email": "john@example.com",
     "password": "password123"
   }'
   ```

## Notes
- JWT token expires in 24 hours
- Last login timestamp is updated on successful login
- Response includes admin data without sensitive information
- Rate limiting is applied to prevent brute force attacks 