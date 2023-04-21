import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divied",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    if (authenticate === false) {
      navigate("/login");
    } else {
      navigate("/?q=");
      setAuthenticate(false);
    }
  };

  const goToHome = () => {
    navigate("/?q=");
  };

  const serch = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value; // input type = 'text' 값 읽어오는 법
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === false ? "로그인" : "로그아웃"}</div>
        </div>
      </div>
      <div className="nav-selection" onClick={goToHome}>
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt=""
        ></img>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {/* <li>여성</li> */}
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(e) => serch(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
