import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel='preload'
                        href='/fonts/AvenirLTStd-Black.woff2'
                        as='font'
                        crossOrigin=''
                    />
                    <link
                        rel='preload'
                        href='/fonts/AvenirLTStd-Roman.woff2'
                        as='font'
                        crossOrigin=''
                    />
                    <link rel='stylesheet' type='text/css' href='/global.css' />
                    <link
                        rel='stylesheet'
                        type='text/css'
                        href='/normalize.css'
                    />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}
