/** @type {import('next').NextConfig} */
const nextConfig = {
    /* necessary to make bcrypt work */
    // webpack: (config) => {
    //     config.externals = [...config.externals, 'bcrypt'];
    //     return config;
    // },
};

export default nextConfig;
