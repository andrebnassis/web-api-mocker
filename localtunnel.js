const localtunnel = require('localtunnel');

const PORT = 3000;
const SUBDOMAIN = process.env.SUBDOMAIN;

(async () => {
  const tunnel = await localtunnel({ port: PORT, subdomain: SUBDOMAIN || undefined});

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(`map port ${PORT} to ${tunnel.url}`);

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();