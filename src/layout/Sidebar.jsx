import SnbMenu from "@/layout/SnbMenu";
import IcLogo from "@/assets/icons/logo_pf.svg";
import IcLogo2 from "@/assets/icons/logo_pf_2.svg";

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Sidebar({ menuList=[], open=true }) {
  const router = useRouter()
  const pathname = usePathname()

  const goMainPage = () => {
    pathname.startsWith('/bo') ? router.push('/bo') : router.push('/po')
  }

  const [opened1depth, setOpened1depth] = useState('') // 1depth menu code

  useEffect(() => {
    if (!open) {
      setOpened1depth('')
    }
  }, [open])

  return (
    <aside className={`sidebar ${open ? 'snb-open' : ''}`}>
      <div 
        className="logo"
        onClick={goMainPage}
      >
        {open ? <IcLogo /> : <IcLogo2 />}
      </div>

      <div className="container">
        <nav>
          <div className="cate-box">
            <ul>
              {menuList.map((m, i) => (
                <SnbMenu 
                  key={`${i}-${m.name}`} 
                  menu={m}
                  opened1depth={opened1depth}
                  setOpened1depth={setOpened1depth}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
