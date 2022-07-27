import Head from "next/head";
import Image from "next/image";
import Layout from "./components/layout";
import ListProducts from "./components/list_products";
import HomePage from "./home";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Công Ty Cổ Phần Điện Máy Toàn Cầu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_ico_blue.png" />
      </Head>
      <HomePage />
    </Layout>
  );
}
