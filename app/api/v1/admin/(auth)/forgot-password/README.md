# Reset Password API

This API is used to reset the password of an admin user using the token received in the password reset email.

## Endpoint
`POST /api/v1/admin/auth/reset-password`

## Request Body
```json
{
  "token": "string",    // Reset token from email
  "password": "string", // New password
  "confirmPassword": "string" // Confirm new password
}
```

## Response
```json
{
  "success": true,
  "message": "Password reset successful"
}
```

## Error Responses
```json
{
  "success": false,
  "error": "Invalid or expired token"
}
```
```json
{
  "success": false,
  "error": "Passwords do not match"
}
```
```json
{
  "success": false,
  "error": "Password must be at least 8 characters long"
}
```

## Functionality
1. Validates the reset token
2. Checks if passwords match
3. Validates password requirements
4. Updates the admin's password
5. Returns success message

## Security
- Token must be valid and not expired
- Password must meet minimum requirements
- Passwords must match
- Token can only be used once

## Example Usage
```bash
curl -X POST http://localhost:3000/api/v1/admin/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "token": "your-reset-token",
    "password": "new-password",
    "confirmPassword": "new-password"
  }'
``` 