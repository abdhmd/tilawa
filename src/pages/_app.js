import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { State } from "context/State";

export default function App({ Component, pageProps }) {
  return (
    <State>
      <main className=" light bg-skin-layout-background  text-skin-text">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </State>
  );
}
