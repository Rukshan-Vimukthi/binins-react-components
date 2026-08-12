import { useEffect, useState } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { RatingProps } from "./types";


export function Rating(props: RatingProps){

    const [ratingStars, setRatingStars] = useState<number[]>([]);
    const [clickedStar, setClickedStar] = useState<number>(-1);

    const levels: string[] = ["Very poor", "Poor", "Average", "Good", "Excellent"];
    const colorCodes: string[] = ["#000", "#FF5500", "#FFDD00", "#55FF55", "#00AA00"];

    const onClick = (index: number) => {
        setClickedStar(index);
        props.onChange(index + 1);
    }

    useEffect(() => {
      setRatingStars([]);
        for (let i = 0; i < 5; i++){
            setRatingStars((old) => {
                return [
                  ...old,
                  i
                ];
            })
        }
    }, []);

    return (
      <>
        <span
          style={{
            fontSize: "0.95rem",
            fontWeight: "500",
            color: "#555",
          }}
        >
          {props.text ? props.text : "How was your experience?"}
        </span>

        <div className="d-flex gap-2 py-2">
          {ratingStars.map((index) =>
            index <= clickedStar ? (
              <StarFill
                color={"#FFDD00"}
                onClick={() => onClick(index)}
                size={25}
              />
            ) : (
              <Star color={"#222"} onClick={() => onClick(index)} size={25} />
            )
          )}

          <span 
            style={{ 
              paddingLeft: "20px",
              fontSize: "1.3rem",
              fontWeight: "bold",
              color: colorCodes[clickedStar] }}>
            {levels[clickedStar]}
          </span>
        </div>
      </>
    );
}