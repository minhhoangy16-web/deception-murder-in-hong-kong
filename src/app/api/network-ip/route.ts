import { NextResponse } from "next/server";
import os from "os";

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

export async function GET() {
  const ip = getLocalIpAddress();
  return NextResponse.json({ ip, port: process.env.PORT || 3000 });
}
