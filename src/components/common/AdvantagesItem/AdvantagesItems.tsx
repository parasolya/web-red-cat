import clsx from "clsx";

import { advantagesData } from "@/data";
import styles from './AdvantagesItems.module.css';


const AdvantagesItems = () => {
  return (
    <ul className="flex justify-between gap-12">
      {advantagesData.advantages.map(({ id, name, description}, index) => 
        <li className={clsx('w-1/4', styles[id])} key={index}>
          <h2 className="text-brown text-center font-semibold uppercase mb-4">{name}</h2>
          <p className="text-center">{description}</p>
        </li>
      )}
    </ul>
  );
};

export default AdvantagesItems;
