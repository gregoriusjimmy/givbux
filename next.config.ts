import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images:{
    domains: ['image.cnbcfm.com','static2.finnhub.io'],
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.cnbcfm.com',
          port: '',
          pathname: '/api/v1/image/**',
          search: '',
        },
    ],
  }
};
 
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);