import React from 'react';

type Props = {
    currentRating: number,
    handleRatingChange: (newRating: number) => void,
}

export function RatingList({ currentRating, handleRatingChange }: Props) {

    const ratings = [1, 2, 3, 4, 5].map((r, i) => {
        let selectedClass = 'rating-background cursor-pointer bg-light-gray text-white';
        let notSelectedClass = 'rating-background cursor-pointer hover:bg-orange hover:text-white';

        return (
            <li key={i} onClick={(() => handleRatingChange(r))}
                className={((currentRating === -1) || (currentRating !== r)) ?
                    notSelectedClass : selectedClass}>
                {r}
            </li>
        );
    });

    return (<ul className="flex justify-between">
        {ratings}
    </ul>);

}
