import Link from "next/link";

export default  function Home(){
    return (
    <div> 
    <h1> Trang chủ </h1>
    <Link href= "/about"> Về chúng tôi</Link>
    <br/>
    <Link href= "/contact"> Liên hệ</Link>
</div>

)
}
