import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#F7F9FC]">
      <Image src="/images/img_404.png" alt="" width={600} height={256} />
      <h2 className="mt-[3.75rem] text-4xl font-bold">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="mt-4 text-[#606882] text-xl leading-8 text-center">
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        문제가 지속된다면 고객센터로 연락 주세요.
      </p>
      <div className="grid grid-cols-[10rem_10rem] items-center gap-2 mt-[2.5rem]">
        <Link href="/" className="btn btn-black btn-l">
          확인
        </Link>
        <Link href="/" className="btn btn-green btn-l">
          홈으로
        </Link>
      </div>
    </div>
  );
}
