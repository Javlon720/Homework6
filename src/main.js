import { promises as fs } from "fs"
import * as http from "node:http"
import * as os from "node:os"

const PORT = 3_000
const hostName = os.hostname()
const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url);
  if (url == '/javlon') {
    res.end(`okay javlon`)
  }
  else if (url == "hello") {
    res.end("helloo world")
  } else {
    res.end("404")
  }
})


server.listen(PORT, hostName, () => {
  console.log(`server on ${PORT}`);

})