import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { Weather } from "../components/Weather";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Weather at ur IP.</title>
            </Head>
            <motion.div animate={{ opacity: [0, 1], y: [-10, 0] }} transition={{ duration: 0.5 }} className="h-[100vh] flex flex-col items-center justify-center text-white text-3xl font-semibold">
                <p>Current weather at</p>
                <Weather/>
            </motion.div>
        </>
    );
};

export default Home;
