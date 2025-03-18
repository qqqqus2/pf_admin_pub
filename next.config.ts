import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    webpack(config) {
        config.cache = false; // caching X

        // src 경로 alias 처리
        config.resolve.alias["@"] = path.join(__dirname, "src");
        config.resolve.alias["./@"] = path.join(__dirname, "src");
        config.resolve.alias["@pub"] = path.join(__dirname, "src/app/pub");

        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule: any) =>
            rule.test?.test?.(".svg")
        );

        // Push new rules to handle files
        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule?.issuer,
                resourceQuery: {
                    not: [...(fileLoaderRule?.resourceQuery?.not || []), /url/],
                }, // exclude if *.svg?url
                // use: ["@svgr/webpack"],
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: "preset-default",
                                        params: {
                                            overrides: { removeViewBox: false },
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            }
        );

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },

    // You can add other Next.js config options here as needed

    // SCSS 관련 설정
    sassOptions: {
        includePaths: [path.join(__dirname, "src", "assets/scss")], // src/assets/scss 디렉토리 추가
        silenceDeprecations: ["legacy-js-api"],
    },

    // 외부 url 이미지 설정
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pf.kiwiz.co.kr",
                port: "9893",
                pathname: "/**",
            },
        ],
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/pub/page",
                permanent: false, // 임시 리다이렉트, permanent: true로 하면 영구 리다이렉트
            },
        ];
    },
    async rewrites() {
        return [];
    },

    reactStrictMode: false,

    // nocache on dev
    // ...(process.env.NODE_ENV !== "production" && { cacheMaxMemorySize: 0 }),
};

export default nextConfig;
