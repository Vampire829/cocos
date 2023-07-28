import cocos from "../../../public/free-icon-coconut-3239295.png";
import styles from "../Header/Header.module.css";
import vk from "../../../public/free-icon-vk-logo-of-social-network-39699.png";
import inst from "../../../public/free-icon-instagram-1384031.png";
import teleg from "../../../public/free-icon-telegram-logo-87413.png";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={cocos} alt="cocos" />
      </div>
      <div className={styles.links}>
        <a href="/">COCOS</a>
      </div>
      <div className={styles.social}>
        <a href="">
          {" "}
          <img src={vk} alt="" />
        </a>
        <a href="">
          {" "}
          <img src={inst} alt="" />
        </a>
        <a href="">
          {" "}
          <img src={teleg} alt="" />
        </a>
        <a href="/sign">Войти</a>
      </div>
    </div>
  );
};

export default Header;
