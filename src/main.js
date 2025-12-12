import { promises as fs } from "fs"
import * as http from "http"


const PORT = 3_001

const server = http.createServer(async (req, res) => {
  const url = req.url.split('/').filter(Boolean)
  console.log(url);

  res.setHeader("Access-Control-Allow-Origin", "*")
  
  if (url.length == 0) {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end('home page')
    } else {
      res.writeHead(405)
      return res.end()
    }
  }

  if (url[0] === "posts") {
    if (req.method === "GET") {
      const json = await fs.readFile("./Json/posts.json", "utf-8");

      const parse = JSON.parse(json)
      const filter = parse.filter(e => e.id == url[1])

      if (filter.length > 0) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(filter))
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(json)
    } else {
      res.writeHead(405)
      return res.end()
    }
  }


  if (url[0] === "users") {
    if (req.method === "GET") {
      const json = await fs.readFile("./Json/users.json", "utf-8");

      const parse = JSON.parse(json)
      const filter = parse.filter(e => e.id == url[1])

      if (filter.length > 0) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(filter))
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(json)
    } else {
      res.writeHead(405)
      return res.end()
    }
  }


  if (url[0] === "comments") {
    if (req.method === "GET") {
      const json = await fs.readFile("./Json/comments.json", "utf-8")

      const parse = JSON.parse(json)
      const filter = parse.filter((item) => item.id == url[1])

      if (filter.length > 0) {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(filter))
      }
      res.writeHead(200, { "content-type": "application/json" })

      return res.end(json)
    } else {
      res.writeHead(405)
      return res.end()
    }
  }
  if (url[0] === "albums") {
    if (req.method === "GET") {
      const json = await fs.readFile("./Json/albums.json", "utf-8")

      const parse = JSON.parse(json)
      const filter = parse.filter(el => el.id == url[1])

      if (filter.length > 0) {
        res.writeHead(200, { "content-type": "application/json" })
        return res.end(JSON.stringify(filter))
      }

      res.writeHead(200, { "content-type": "application/json" })
      return res.end(json)
    } else {
      res.writeHead(405)
      return res.end()
    }

  }
  res.writeHead(404, "not found", { "content-type": "text/html" })
  return res.end("404 NOT FOUND")
})




server.listen(PORT, () => {
  console.log(`${PORT} on Port `);

})