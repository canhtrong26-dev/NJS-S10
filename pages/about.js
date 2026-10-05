import { useRouter} from 'next/router';

export default function About (){
    const router = useRouter();
    const handleClick = () => {
    router.push('/');
};

    return (
<div>
        <h1> Về chúng tôi </h1>
        <button onClick = {handleClick}> Quay về trang chủ </button>
</div>
)


}