import React from "react";
import Image from "next/image";
import styles, { layout } from "../style";
import { card } from "@/public";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better deal <br className="sm:block hidden" /> in a few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          ipsum? Ipsa, nobis cupiditate quasi eveniet odit excepturi reiciendis
          voluptas qui vero id laboriosam, itaque dignissimos saepe! Natus
          beatae assumenda sit!
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <Image src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
