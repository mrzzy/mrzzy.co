<<<<<<< HEAD
import mdx from "@next/mdx";
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting)
import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
=======
import mdx from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting)

const withMDX = mdx({
<<<<<<< HEAD
  extension: /\.mdx?$/,
  options: {},
});
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting)
    extension: /\.mdx?$/,
    options: { },
});
=======
  extension: /\.mdx?$/,
  options: { }
})
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting)

<<<<<<< HEAD
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting)
const withNextIntl = createNextIntlPlugin();

=======
const withNextIntl = createNextIntlPlugin()

>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting)
/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting)
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};
=======
  pageExtensions: ['ts', 'tsx', 'md', 'mdx']
}
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting)

<<<<<<< HEAD
export default withMDX(nextConfig);
||||||| parent of 84b57c2 (build: add eslint static analysis, standard code formatting)
export default withNextIntl(withMDX(nextConfig));
=======
export default withNextIntl(withMDX(nextConfig))
>>>>>>> 84b57c2 (build: add eslint static analysis, standard code formatting)
