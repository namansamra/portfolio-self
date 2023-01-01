import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>NS | Frontend Engineer</title>
          <link rel="icon" href="/assets/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/canvas.js"></script>
          <script src="/tagcanvas.js"></script>
        </body>
      </Html>
    );
  }
}
