# Admin Registration API Documentation

## Endpoint
```
POST /api/v1/admin/register
```

## Overview
This API endpoint handles admin registration with image upload functionality. It includes validation, security measures, and proper error handling.

## Request Format
Send the request as FormData with the following fields:

```javascript
{
  firstName: "John",        // Required, 2-30 characters
  lastName: "Doe",         // Required, 2-30 characters
  username: "johndoe",     // Required, 3-30 characters, unique
  email: "john@example.com", // Required, valid email, unique
  password: "password123",  // Required, min 6 characters
  mobileNumber: "+1234567890", // Required, E.164 format
  profileImage: File       // Optional, image file, max 2MB
}
```

## Features

### 1. Validation
- All fields are required except profileImage
- Email and username must be unique
- Password minimum 6 characters
- Mobile number must be in E.164 format (e.g. +1234567890)
- First name and last name: 2-30 characters, letters and spaces only
- Username: 3-30 characters, letters, numbers, and underscores only

### 2. Image Handling
- Supports multiple image formats (PNG, JPEG, GIF, etc.)
- Converts all images to WebP format
- Preserves transparency
- Generates multiple sizes:
  - Thumbnail (150x150)
  - Medium (300x300)
  - Large (600x600)
- Maximum file size: 2MB

### 3. Security
- Password hashing using bcrypt
- JWT token generation
- Input validation
- File type validation
- Size limits

### 4. Response Format
```javascript
{
  success: true,
  message: "Admin registered successfully",
  data: {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "john@example.com",
    mobileNumber: "1234567890",
    profileImage: "/uploads/profile-123.webp",
    role: "admin",
    accountStatus: "active",
    createdAt: "2024-04-01T...",
    // ... other fields
  },
  token: "eyJhbGciOiJIUzI1NiIs..."
}
```

## Error Cases
1. Duplicate email/username
   ```javascript
   {
     success: false,
     error: "Admin with this email or username already exists"
   }
   ```

2. Invalid file type
   ```javascript
   {
     success: false,
     error: "Please upload only image files"
   }
   ```

3. File size > 2MB
   ```javascript
   {
     success: false,
     error: "Image size should be less than 2MB"
   }
   ```

4. Missing required fields
   ```javascript
   {
     success: false,
     error: "First name and last name are required"
   }
   ```

5. Invalid data format
   ```javascript
   {
     success: false,
     error: "Invalid email format"
   }
   ```

## Testing
1. Using Postman:
   - Create new POST request
   - URL: `http://localhost:3000/api/v1/admin/register`
   - Select "form-data" in Body
   - Add all required fields
   - Add image file in "profileImage" field

2. Example cURL:
   ```bash
   curl -X POST http://localhost:3000/api/v1/admin/register \
   -F "firstName=John" \
   -F "lastName=Doe" \
   -F "username=johndoe" \
   -F "email=john@example.com" \
   -F "password=password123" \
   -F "mobileNumber=1234567890" \
   -F "profileImage=@/path/to/image.jpg"
   ```

## Notes
- All images are converted to WebP format for better performance
- JWT token expires in 24 hours
- Profile image is optional
- Response includes admin data without sensitive information
- All timestamps are in ISO format 