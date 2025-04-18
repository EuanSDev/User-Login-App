# Setup

First run `npm i` to install the dependancies

Next copy .env.example and rename it to .env

- Add a port for example: 8000
- Add mongo database connection details
- Add a jwt secret, this can be created with `openssl rand -hex 64` in the terminal. Alternatively a secret can be created here: https://jwtsecret.com/generate

Finally run `npm run dev` to run the site in development or `npm run start` to run it in production.
