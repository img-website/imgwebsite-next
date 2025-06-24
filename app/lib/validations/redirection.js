import { z } from 'zod';

export const redirectionSchema = z.object({
  from: z.string().url({ message: 'From must be a valid URL' }),
  to: z.string().url({ message: 'To must be a valid URL' }),
  methodCode: z.enum(['301', '302', '307', '308']).transform(Number), // 301 (Permanent Redirect), 302 (Found), 307 (Temporary Redirect), 308 (Permanent Redirect with method preservation)
});
