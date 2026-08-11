export type CarouselProps = {
  items: JSX.Element[] | string[]
}

export type CarouselItemProps = {
    /**
     * Content of each slide. this can be either a string or JSX Element
     */ 
  content?: string | JSX.Element;

  /**
   * custom css class names
   */
  className?: string
};