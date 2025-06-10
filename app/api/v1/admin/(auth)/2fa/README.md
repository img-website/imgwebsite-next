# Two-Factor Authentication (2FA) APIs

This document provides detailed information about the Two-Factor Authentication (2FA) APIs for admin users.

## Table of Contents
- [Setup 2FA](#setup-2fa)
- [Verify 2FA](#verify-2fa)
- [Error Handling](#error-handling)

## Setup 2FA

### Generate QR Code
**Endpoint:** `POST /api/v1/admin/2fa/setup`

**Request Body:**
```json
{
  "adminId": "string" // MongoDB admin ID
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "secret": "string", // 2FA secret
    "qrCode": "string"  // QR code data URL
  }
}
```

**Steps:**
1. Call this endpoint with your admin ID
2. Scan the QR code with Google Authenticator app
3. Save the generated 6-digit code for verification

### Complete 2FA Setup
**Endpoint:** `PUT /api/v1/admin/2fa/setup`

**Request Body:**
```json
{
  "adminId": "string", // MongoDB admin ID
  "token": "string"    // 6-digit code from Google Authenticator
}
```

**Response:**
```json
{
  "success": true,
  "message": "2FA setup completed successfully",
  "backupCodes": ["string"] // Array of backup codes
}
```

**Steps:**
1. Enter the 6-digit code from Google Authenticator
2. Save the backup codes securely
3. 2FA will be enabled for your account

## Verify 2FA

### Verify Login with 2FA
**Endpoint:** `POST /api/v1/admin/2fa/verify`

**Request Body:**
```json
{
  "adminId": "string",      // MongoDB admin ID
  "token": "string",        // 6-digit code from Google Authenticator
  "isBackupCode": boolean   // Optional, default: false
}
```

**Response:**
```json
{
  "success": true,
  "message": "2FA verification successful",
  "token": "string" // JWT token with 2FA verified
}
```

**Steps:**
1. After successful login with email/password, you'll receive a temporary token
2. Use this endpoint to verify your 2FA code
3. You'll receive a new JWT token for accessing protected routes

## Error Handling

### Common Error Responses

**Invalid Setup State:**
```json
{
  "success": false,
  "error": "Invalid setup state"
}
```
This occurs when trying to verify 2FA before completing the setup process.

**Invalid Verification Code:**
```json
{
  "success": false,
  "error": "Invalid verification code"
}
```
This occurs when the provided 2FA code is incorrect.

**Invalid Admin or 2FA Not Enabled:**
```json
{
  "success": false,
  "error": "Invalid admin or 2FA not enabled"
}
```
This occurs when the admin doesn't exist or 2FA is not enabled.

## Security Notes

1. Backup codes are one-time use only
2. 2FA setup tokens expire after 5 minutes
3. Keep your backup codes in a secure location
4. Do not share your 2FA codes with anyone
5. If you lose access to your 2FA device, contact system administrator

## Example Flow

1. **Setup 2FA:**
   ```bash
   # Step 1: Generate QR code
   curl -X POST http://localhost:3000/api/v1/admin/2fa/setup \
     -H "Content-Type: application/json" \
     -d '{"adminId": "your-admin-id"}'

   # Step 2: Verify setup
   curl -X PUT http://localhost:3000/api/v1/admin/2fa/setup \
     -H "Content-Type: application/json" \
     -d '{"adminId": "your-admin-id", "token": "123456"}'
   ```

2. **Login with 2FA:**
   ```bash
   # Step 1: Login with email/password
   curl -X POST http://localhost:3000/api/v1/admin/login \
     -H "Content-Type: application/json" \
     -d '{"email": "admin@example.com", "password": "your-password"}'

   # Step 2: Verify 2FA
   curl -X POST http://localhost:3000/api/v1/admin/2fa/verify \
     -H "Content-Type: application/json" \
     -d '{"adminId": "your-admin-id", "token": "123456"}'
   ``` 