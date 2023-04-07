import ThankYouImage from '/images/illustration-thank-you.svg';

type Props = {
    selectedRating: number,
    handleBackButton: () => void,
}
export function ThankYouCard({ selectedRating, handleBackButton }: Props) {
    return (
        <main className="relative card flex flex-col justify-center items-center text-center">
            <button data-cy="btn-to-rating-form" className="self-start" data-icon="back-arrow"
                arial-label="Back Button" onClick={() => handleBackButton()}></button>
            <img src={ThankYouImage} alt="Image confirming that rating has been received" />
            <h2 data-cy="rating-confirm" className="px-4 py-2 rounded-full bg-dark-blue text-orange">You selected {selectedRating} out of 5.</h2>
            <h1 className="text-xl text-white">Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!</p>
        </main>
    );
}
