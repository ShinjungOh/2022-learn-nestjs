import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <div>내용을 찾을 수 없습니다. URL을 확인해 주세요.</div>
            <Link href='/'><a>Home으로 가기</a></Link>
        </>
    );
}

export default NotFound;
