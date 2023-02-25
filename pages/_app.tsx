
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { NextUIProvider } from '@nextui-org/react'
import { Box } from "../components/Box";
import Navbar from '../components/NavbarComponent';

import "froala-editor/js/plugins/paragraph_format.min";
import "froala-editor/js/plugins/draggable.min.js";
// Require Editor CSS files.
import "froala-editor/css/plugins/draggable.min.css";
// import "froala-editor/css/froala_editor.pkgd.min.css";
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';


export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Navbar />
        <Box css={{ px: "$12", py: "$15", mt: "$12", "@xsMax": {px: "$10"}, maxWidth: "800px", margin: "0 auto" }}>
          <Component {...pageProps} />
        </Box>
      </NextUIProvider>
    </SessionProvider>
  )
}
