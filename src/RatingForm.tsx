
import iconStar from '/images/icon-star.svg';
import { FormEventHandler } from "react";
import { RatingList } from "./RatingList";

type Prop = {
    selectedRating: number,
    handleSubmit: FormEventHandler<HTMLFormElement>,
    handleRatingChange: (newRating: number) => void, 
};
export function RatingForm({selectedRating, handleSubmit, handleRatingChange}: Prop) {
    return (
        <main className="card">
            <img className="block p-2 rounded-full bg-dark-blue" src={iconStar} alt="Orange Start" />
            <h1 className="text-2xl text-white">How did we do ?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <RatingList selectedRating={selectedRating} handleRatingChange={handleRatingChange} />
            <form onSubmit={handleSubmit}>
                <button type="submit" className="button rounded-full w-[70%] mx-auto bg-orange text-white text-center uppercase
            hover:bg-white hover:text-orange ">Submit</button>
            </form>
        </main>
    );
}
