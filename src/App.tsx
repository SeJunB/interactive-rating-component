import { FormEventHandler, useState } from 'react';
import { RatingForm } from './RatingForm';
import { ThankYouCard } from './ThankYouCard';

function App() {
    const [selectedRating, setRating] = useState(-1);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    };

    const handleBackButton = () => {
        setFormSubmitted(false);
    };

    console.log(formSubmitted)

    return (formSubmitted) ? <ThankYouCard selectedRating={selectedRating} handleBackButton={handleBackButton}/> :
        <RatingForm selectedRating={selectedRating}
            handleRatingChange={handleRatingChange}
            handleSubmit={handleSubmit} />;
}

export default App
