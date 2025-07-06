import https from 'https';

const options = { host: 'agromart.example.com', port: 443, method: 'GET' };

const req = https.request(options, res => {
  const tlsVersion = res.socket.getProtocol();
  console.log(`TLS version: ${tlsVersion}`);
  process.exit(tlsVersion.startsWith('TLSv1.2') || tlsVersion.startsWith('TLSv1.3') ? 0 : 1);
});

req.on('error', () => process.exit(1));
req.end();