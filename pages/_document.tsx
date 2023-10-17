import Document, { Head, Html, Main, NextScript } from "next/document";

class Test extends Document {
    render() {
        return <Html lang="en">
            <Head>
                <meta name="description" content="Find a lot of great events that allow you to evolve..." />
            </Head>
            <body>
                {/* <h1 id="Overlays">This can act as portal</h1> */}
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}

export default Test;