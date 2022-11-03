/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "images.unsplash.com", "www.jsonkeeper.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibWlja21hcmF0dGEiLCJhIjoiY2xhMGZsZ2ZlMDgyNDN3cGV6b2RtcGM5MyJ9.hnrYJaHiCZ_fwQwtabcSQw'
  }
};

module.exports = nextConfig;
