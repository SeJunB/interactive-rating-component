import iconStar from '/images/icon-star.svg';
import { useState, FormEventHandler } from "react";

type Prop = {
    selectedRating: number,
    children: React.ReactNode,
    handleSubmit: FormEventHandler<HTMLFormElement>,
};

export function RatingForm({ selectedRating, children, handleSubmit }: Prop) {
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    //{!ratingSelected && <p className="text-center text-orange">Please select a rating!</p>}
    return (
        <main className="card">
            <img className="block p-2 rounded-full bg-dark-blue" src={iconStar} alt="Orange Start" />
            <h1 className="text-2xl text-white">How did we do ?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            {children}
            <form className="space-y-3" onSubmit={(e) => {
                setShowErrorMessage(selectedRating === -1);
                handleSubmit(e)
            }}>
                <button data-cy="btn-submit" type="submit" className="button rounded-full w-[70%] mx-auto bg-orange text-white text-center uppercase
                hover:bg-white hover:text-orange ">Submit</button>
                {showErrorMessage && <p data-cy="no-rating-selected-error-msg" className="text-orange text-center">Please select a rating</p>}
            </form>
        </main>
    );
}
