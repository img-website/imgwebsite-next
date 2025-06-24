import { z } from 'zod';

const urlOrPath = z.string().refine(val => {
  try {
    new URL(val);
    return true;
  } catch {
    return val.startsWith('/');
  }
}, { message: 'Enter a valid absolute or relative URL (must start with / for relative)' });

export const redirectionSchema = z.object({
  from: urlOrPath,
  to: urlOrPath,
  methodCode: z.enum(['301', '302', '307', '308']).transform(Number), // 301 (Permanent Redirect), 302 (Found), 307 (Temporary Redirect), 308 (Permanent Redirect with method preservation)
});
