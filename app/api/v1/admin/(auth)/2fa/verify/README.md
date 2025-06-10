# Email Verification API

This API is used to verify the email address of an admin user after registration.

## Endpoint
`POST /api/v1/admin/auth/verify`

## Request Body
```json
{
  "token": "string" // Verification token received in email
}
```

## Response
```json
{
  "success": true,
  "message": "Email verified successfully"
}
```

## Error Responses
```json
{
  "success": false,
  "error": "Invalid or expired token"
}
```

## Functionality
1. Validates the verification token
2. Updates the admin's email verification status
3. Activates the admin account
4. Returns success message

## Security
- Token expires after 24 hours
- Token can only be used once
- Invalid tokens are rejected immediately

## Example Usage
```bash
curl -X POST http://localhost:3000/api/v1/admin/auth/verify \
  -H "Content-Type: application/json" \
  -d '{"token": "your-verification-token"}'
``` 