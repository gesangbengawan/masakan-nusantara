import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://ioikpgyvhcztqogafajy.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvaWtwZ3l2aGN6dHFvZ2FmYWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5MjQ2OTAsImV4cCI6MjA4NTUwMDY5MH0.qoyixzCacBNIy6OUXfozEFvteSL1LoeEYqxnqs7BQT4",
  }
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA(nextConfig);
