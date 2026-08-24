import 'dotenv/config';
import app from './app.ts';

const HOST = '192.168.0.35';

app.listen(3000, HOST, () => {
  console.log(`Server is running on http://${HOST}:3000`);
});
