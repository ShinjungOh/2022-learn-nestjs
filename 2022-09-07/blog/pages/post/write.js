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
        </>
    )
}

// Write.getInitialProps = async () => {
//     return {}
// }

export default Write;
