# My Static Page

[![Deploy](https://github.com/flyme2bluemoon/flyme2bluemoon.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/flyme2bluemoon/flyme2bluemoon.github.io/actions/workflows/nextjs.yml)  

Ah, good ol' rebuilding my static site using a new technology. This time, NextJS. Thankfully, coming from Gatsby, many of the files could just be copied over with a few modifications.

## Check it out

You can find my landing page deployed here: https://flyme2bluemoon.github.io  
<!-- Alternatively, it is also hosted on McGill School of Computer Science's servers: https://cs.mcgill.ca/~mshen/ -->

## Status Page

Just for fun, I have also set up a [status page](https://stats.uptimerobot.com/E7JLyil9Jm) using Uptime Robot to see when Github Pages is down. LOL

## Build instructions

To run a development server on http://localhost:3000.  
[Turbopack](https://nextjs.org/docs/architecture/turbopack) is being used although it is still in beta.
```sh
npm run dev
```

Although the production side is hosted on Github Pages and is built automatically, you can test the production build which will output to `out/`. Any trusty HTTP server should be able to work to test this.
```sh
npm run build
npx serve@latest out
```

A shortcut to compile a test production build and serve it using Vercel's static file server. Use this if you want to benchmark with Chrome's Lighthouse.
```sh
npm run serve
```

## Feedback

If you find any issues, please file a Github Issue in [this repository](https://github.com/flyme2bluemoon/flyme2bluemoon.github.io/issues).
