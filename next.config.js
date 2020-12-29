module.exports = {
  images: {
    domains: ["cdn.discordapp.com"] /* KEEP THIS OTHERWISE IMAGES WILL NOT LOAD */,
  },
  async redirects() {
    return [
      {
        source: "/add",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=788742952779776070&permissions=8&scope=bot",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://discord.gg/2X6T44wqbT",
        permanent: true,
      },
      {
        source: "/logout",
        destination: "/api/auth/logout",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/api/auth/login",
        permanent: true,
      },
    ];
  },
};
