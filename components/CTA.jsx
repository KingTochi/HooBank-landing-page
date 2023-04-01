import React from "react";
import Button from "./Button";
import styles from "../pages/style";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}
    >
      <div className="flex-1 flex flex-col" >
        <h2 className={styles.heading2} >Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          veritatis consequatur sequi reiciendis soluta aliquid sunt voluptatem
          quam temporibus officiis suscipit, et at, dolores nam assumenda nobis
          nisi tempora cumque.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-10 sm:mt-0 mt-10 `} >
        <Button />
      </div>
    </section>
  );
};

export default CTA;