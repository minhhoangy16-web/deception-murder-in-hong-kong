import { createServer } from "http";
import next from "next";
import { Server as SocketIOServer } from "socket.io";
import { setupSocketHandlers } from "./src/server/socketHandler";
import os from "os";

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);
const hostname = "0.0.0.0";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

function getLocalIpAddress(): string {
  const interfaces = os.networkInterfaces();
  
  // Prefer Wi-Fi or Ethernet
  const preferred = ["wi-fi", "wifi", "ethernet", "lan", "wlan", "en0", "eth0"];
  for (const pref of preferred) {
    for (const name of Object.keys(interfaces)) {
      if (name.toLowerCase().includes(pref)) {
        for (const iface of interfaces[name] || []) {
          if (iface.family === "IPv4" && !iface.internal) {
            return iface.address;
          }
        }
      }
    }
  }

  // Fallback to any non-internal IPv4 that is not a VMware/Virtual adapter
  for (const name of Object.keys(interfaces)) {
    if (name.toLowerCase().includes("vmnet") || name.toLowerCase().includes("virtual") || name.toLowerCase().includes("vbox")) {
      continue;
    }
    for (const iface of interfaces[name] || []) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }

  return "localhost";
}

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    handle(req, res);
  });

  const io = new SocketIOServer(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  setupSocketHandlers(io);

  httpServer.listen(port, hostname, () => {
    const localIp = getLocalIpAddress();
    console.log(`\n========================================================================`);
    console.log(`🇭🇰 DECEPTION: MURDER IN HONG KONG SERVER IS RUNNING!`);
    console.log(`========================================================================`);
    console.log(`> 🖥️  Máy tính của bạn:         http://localhost:${port}`);
    console.log(`> 📱 Điện thoại / Cùng Wi-Fi:   http://${localIp}:${port}`);
    console.log(`> 🌐 Bạn bè ở xa (Khác Wi-Fi): Dùng lệnh: npx localtunnel --port ${port}`);
    console.log(`========================================================================\n`);
  });
});
