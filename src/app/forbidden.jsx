import Link from "next/link";
import Image from "next/image";

export default function Forbidden() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#F7F9FC]">
      <Image src="/images/img_403.png" alt="" width={600} height={256} />
      <h2 className="mt-[3.75rem] text-4xl font-bold">접근 권한이 없습니다</h2>
      <p className="mt-4 text-[#606882] text-xl leading-8 text-center">
        해당 페이지에 접근할 수 있는 권한이 없습니다.
        <br />
        관리자에게 문의 부탁드립니다.
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
