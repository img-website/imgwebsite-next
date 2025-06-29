import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import devcert from 'devcert';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT || '3000', 10);

(async () => {
  const { key, cert } = await devcert.certificateFor('localhost');
  await app.prepare();
  createServer({ key, cert }, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> Ready on https://localhost:${port}`);
  });
})();
