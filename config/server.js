module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});

// API TOKEN 3697bdd682d80eaf576d2bb51d390044707f090bf2fe1bca8fdedf286d301b9382a6150a9e740f1dd3371d22c36d1233ab3ae02e3f85f753f6d768ca8bf984b850a05db22fac1f34e7e7309720086cc7fe8541a196e25bec1a98c909aab0d05e8293e2c2c2f2b0d295ba359a1cff8cfe7815b8f71ce41fc0560530e1f460c435
