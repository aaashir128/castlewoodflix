import React, {useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      }else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.6435-9/126140804_105258228085950_4806496747748946221_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeF-mLAvc7C4aZqVOI_3N_ia7Rm4zngotDXtGbjOeCi0NXKsF7bbEquto9tn3PnVycmo0mvsICNjqy2RX3Y0vb4e&_nc_ohc=XYQ-UffUQhwAX9wMZVz&_nc_ht=scontent.fkhi1-1.fna&oh=dc8b0644b7ff27f5aba28985603ea70e&oe=60C79985"
        alt="CastleWood flix"
      />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="CastleWood flix avatar"
      />
    </div>
  );
}

export default Nav;
