import '../styles/global.css';
import Layout from "@components/Layout";
import {useRouter} from "next/router";
import {useState} from "react";
import {format, formatDistanceToNow} from "date-fns";

export default function App({Component, pageProps}) {
    const router = useRouter();
    const [visitedTime] = useState(new Date());

    return (
        <Layout home={router.pathname === '/'}>
            <div>
                {/*visited: {format(visitedTime, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}*/}
                visited: {formatDistanceToNow(new Date(visitedTime), {addSuffix: true, includeSeconds: true})}
            </div>
            <Component {...pageProps} pathname={router.pathname}/>
        </Layout>
    );
}
