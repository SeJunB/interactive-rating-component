import { FormEventHandler, useState } from 'react';
import { RatingForm } from './RatingForm';
import { RatingList } from './RatingList';
import { ThankYouCard } from './ThankYouCard';

function App() {
    const [selectedRating, setRating] = useState(-1);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setFormSubmitted(selectedRating !== -1);
    };

    const handleBackButton = () => {
        setFormSubmitted(false);
    };



    return (formSubmitted) ?
        <ThankYouCard selectedRating={selectedRating} handleBackButton={handleBackButton} /> :
        (<RatingForm
            selectedRating={selectedRating}
            handleSubmit={handleSubmit}>
            <RatingList selectedRating={selectedRating} handleRatingChange={handleRatingChange} />
        </RatingForm >

        );
}

export default App
