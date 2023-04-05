import { RatingList } from './RatingList';
import iconStar from '/images/icon-star.svg';
import { useState } from 'react';
function App() {

    const [rating, setRating] = useState(-1);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    console.log("Current Rating: " + rating);

    return (
        <main className="w-[90%] p-5 rounded-xl mx-auto bg-primary-bg space-y-6 text-medium-gray">
            <img className="block p-2 rounded-full bg-dark-blue" src={iconStar} alt="Orange Start" />
            <h1 className="text-white font-bold">How did we do ?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            <RatingList currentRating={rating} handleRatingChange={handleRatingChange}/>
            <button className="button rounded-full w-[80%] mx-auto bg-orange text-white text-center uppercase
            hover:bg-white hover:text-orange ">Submit</button>
        </main>
    )
}

export default App
