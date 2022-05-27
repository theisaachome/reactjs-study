import React from 'react';
import mealsImages from "../../assets/meals.jpeg"
import styles from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
  return (
    <>
    <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
    </header>
    <div className={styles["main-image"]}>
        <img src={mealsImages} alt="meals"  />
    </div>
    </>
  )
}

export default Header