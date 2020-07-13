
const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')


function currEnv(phase) {
    console.log('heresdssdsdrere');
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // // when `next build` or `npm run build` is used
    // const isStaging =
    //     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd} `)

    const env = {
        isDev: isDev,
        isProd: isProd
    }

    // next.config.js object
    return {
        env,
    }
}


module.exports = withPlugins(
    [
        withImages
    ],
    {
        env: currEnv
    }
);
