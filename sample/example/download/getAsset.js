var axios = require('axios');

async function getAsset(url) {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/octet-stream",
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "User-Agent": ""
    },
    responseType: "arraybuffer"
  });

  return response.data;
}

getAsset('https://github.com/imssyang/openssl/releases/download/archive/openssl-1.1.1d-debian10-x86_64-201204.tgz');

