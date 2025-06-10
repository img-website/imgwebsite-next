import { z } from 'zod';

export const adminRegistrationSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(30, 'First name cannot exceed 30 characters')
    .regex(/^[a-zA-Z\s]{2,30}$/, 'First name should only contain letters and spaces'),
  
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(30, 'Last name cannot exceed 30 characters')
    .regex(/^[a-zA-Z\s]{2,30}$/, 'Last name should only contain letters and spaces'),
  
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username cannot exceed 30 characters')
    .regex(/^[a-zA-Z0-9_]{3,30}$/, 'Username should only contain letters, numbers, and underscores'),
  
  email: z.string()
    .email('Invalid email format'),
  
  password: z.string()
    .min(6, 'Password must be at least 6 characters'),
    mobileNumber: z.string()
    .regex(/^[0-9]{10}$/, 'If provided, mobile number must be 10 digits')
    .optional()
    .nullable(),
  
  profileImage: z.any().optional(),
}); 