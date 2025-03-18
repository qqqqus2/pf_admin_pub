import IcAlarm from "@/assets/icons/ico_alarm.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="flex gap-3 ml-auto">
        <p className="user">홍길동님</p>
        <button className="btn-header">로그아웃</button>
        <button className="btn-header">비밀번호 변경</button>
        <button className="btn-header btn-alarm" data-cnt="99+">
          <IcAlarm />
        </button>
      </div>
    </header>
  );
}
