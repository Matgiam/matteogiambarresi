import React, { useState } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";


const CARD_IMAGES = [
  "https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963336/matteo_4_jsshqi.jpg",
  "https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963336/matteo_3_mpgfwj.jpg",
  "https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963340/matteo_2_scpcur.png",
  "https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963335/matteo_5_yua60g.jpg",
  "https://res.cloudinary.com/dtpbxvstn/image/upload/v1757963335/matteo_1_clkdng.jpg",
];

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
const ROTATION_FACTOR = 3;

const CardStack = () => {
  const [cards, setCards] = useState(CARD_IMAGES);

  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="cardstacker-wrapper">
      <ul className="cardstacker-cardwrap">
        {cards.map((image, index) => {
          const canDrag = index === 0;
          const offsetX = index * 20;
          const rotation = index * ROTATION_FACTOR;

          return (
            <motion.li
              key={image}
              className={`cardstacker-card ${canDrag ? "cardstacker-card--draggable" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
              }}
              animate={{
                top: index * -CARD_OFFSET,
                left: offsetX,
                scale: 1 - index * SCALE_FACTOR,
                rotate: rotation,
                zIndex: CARD_IMAGES.length - index,
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={() => moveToEnd(index)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CardStack;
