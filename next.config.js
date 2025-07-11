/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/dubai-mainland',
        destination: '/mainland/dubai',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 
key: 'Pragma',
value: 'no-cache',
},
{
key: 'Expires',
value: '0',
},
],
},
];
},
// Optional: disable ETag generation
generateEtags: false,
};
headers: [
  {
    key: 'Cache-Control',
    value: 'no-cache, no-store, must-revalidate',
  },
  {
    key: 'Pragma',
    value: 'no-cache',
  },
  {
    key: 'Expires',
    value: '0',
   },
        ],