/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    trailingSlash: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    output: 'export',
    images: { 
      loader: 'akamai',
      path: '',
     },
    //images: { unoptimized: true },
    env:{
      REACT_APP_CONVERTKIT_API_KEY: 'vq_IA5HkNGRzDNeSnOmWyA',
      REACT_APP_CONVERTKIT_FORM_ID: 2923707,
      API_CONVERTKIT_SUBSCRIBE: 'https://api.convertkit.com/v3/forms/2923707/subscribe',
      REACT_APP_CONTACT_URL:'https://form.jotformeu.com/222884108909060'
    }
}

module.exports = nextConfig
