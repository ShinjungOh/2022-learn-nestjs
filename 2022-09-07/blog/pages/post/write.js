import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Head from "next/head";

// export async function getServerSideProps() {
//     return {};
// }

const Write = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            console.log(JSON.stringify(router));
        }
        router.prefetch('/posts/ssg-ssr');  // build & start
    }, [router]);

    useEffect(() => {
        console.log(router.query);
    }, [router.query]);

    const idRef = useRef(undefined);
    const titleRef = useRef(undefined);
    const contentRef = useRef(undefined);

    const [showLink, setShowLink] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = idRef.current.value;
        const title = titleRef.current.value;
        const content = contentRef.current.value;

        if (id && title && content) {
            fetch('/api/post/write', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id, title, content
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('Fetch Error')
                })
                .then((data) => {
                    setShowLink(true)
                    alert(data.message)
                })
                .catch((error) => alert(`request error : ${error}`))
        }
    }

    return (
        <>
            <Head>
                <title>Write a post</title>
            </Head>
            <h1>내용을 입력하세요</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="id" required ref={idRef}/>
                <br/>
                <br/>
                <input type="text" name="title" placeholder="title" required ref={titleRef}/>
                <br/>
                <br/>
                <textarea type="text" name="content" placeholder="content" required ref={contentRef}/>
                <br/>
                <input className="rounded bg-purple-400 px-2" type="submit" value="Create"/>
            </form>
            {
                showLink &&
                <Link href={`/posts/${idRef.current.value}`}>
                    <a>Created Post</a>
                </Link>
            }
            <br/>
            <br/>
            <button
                // onClick={() => router.push('/posts/[id]','/posts/ssg-ssr', {scroll: false})}
                onClick={() => router.push({pathname: '/posts/[id]', query: {id: 'ssg-ssr'}})}  // history o
                className="rounded bg-purple-200 px-2" type="submit" value="Create"
            >
                router.push
            </button>
            <br/>
            <br/>
            <button
                onClick={() => router.replace('/posts/ssg-ssr')}  // history x
                className="rounded bg-purple-200 px-2" type="submit" value="Create"
            >
                router.replace
            </button>
            <br/>
            <br/>
            <button
                onClick={() => router.back()}
                className="rounded bg-purple-200 px-2" type="submit" value="Create"
            >
                router.back
            </button>
            <br/>
            <br/>
            <button
                onClick={() => router.reload()}
                className="rounded bg-purple-200 px-2" type="submit" value="Create"
            >
                router.reload
            </button>
        </>
    )
}

// Write.getInitialProps = async () => {
//     return {}
// }

export default Write;
