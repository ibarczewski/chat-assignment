/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `@import "app/variables.module.scss";`
    }
};

export default nextConfig;
