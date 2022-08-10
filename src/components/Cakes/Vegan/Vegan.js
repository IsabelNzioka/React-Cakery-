import React from "react";
import classes from "./Vegan.module.css";

import Cakes from "../../dev-data/cakes";
// import { FaCartPlus } from "react-icons/fa";
// import cakes from "../../dev-data/cakes";
// import { icons } from "react-icons";
// import cakes from "../dev-data/cakes";

const Vegan = () => (
  <div className={classes.Cards}>
    {Cakes.map((cake) => {
      return console.log(cake);

      //   if (cake.flavour === "Lemon cake") {
      //     return (
      //       <div className={classes.CardContent}>
      //         <div className={classes.CardImage}>
      //           <img
      //             src={cake.img}
      //             alt={cake.name}
      //             style={{ width: "100%", height: "100%" }}
      //           ></img>
      //         </div>

      //         <div className={classes.Price}>
      //           <div className={classes.CakeName}>{cake.flavour}</div>

      //           <div className={classes.CakePrice}>
      //             {cake.price}$
      //             <h2>
      //               <FaCartPlus />
      //             </h2>
      //           </div>
      //         </div>
      //       </div>
      //     );
      //   }
    })}
  </div>
);

export default Vegan;
