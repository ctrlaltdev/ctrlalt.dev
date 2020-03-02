import Head from 'next/head'

const MainHead = ({ title }) => (
    <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="CTRL ALT DEV" />
        <meta property="og:description" content="Yorick Demichelis" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ctrlalt.dev/social.png" />
        <meta property="og:url" content="https://ctrlalt.dev/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#222222" />
        <link rel="manifest" href="https://ctrlalt.dev/manifest.json" />
        <link rel="shortcut icon" href="https://ctrlalt.dev/favicon.png" />
        <title>CTRL ALT DEV - { title }</title>
    </Head>
)

export default MainHead
