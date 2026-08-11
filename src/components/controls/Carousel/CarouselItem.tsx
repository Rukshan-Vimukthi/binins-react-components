import { CarouselItemProps } from "./types";

export function CarouselItem(props: CarouselItemProps) {
  return (
    <div
      className={props.className + " "}
      style={{
        // backgroundColor: "#DDD",
      }}
    >
      {props.content}
    </div>
  );
}
