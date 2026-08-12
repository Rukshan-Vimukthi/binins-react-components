export type RatingProps = {
    /**
     * Small text displayed on top of the rating bar.
     * 
     * @default How was your experience?
     */
    text: string;
    /**
     * Called when the selecting rating changes
     * 
     * @param rating - The selected rating, from 1 to 5.
     */
    onChange: (rating: number) => void;
}