import { useRouter } from 'next/router';

export default function Contact() {

    const router = useRouter();
    const handleClick = () => {

        router.push('/');

};

    return (
<div>
        <h1> Liên hệ </h1>
        <button onClick = {handleClick}> Quay về trang chủ </button>
</div>
)
}
