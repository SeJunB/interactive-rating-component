
import iconStar from '/images/icon-star.svg';
import { FormEventHandler } from "react";

type Prop = {
    children: React.ReactNode,
    handleSubmit: FormEventHandler<HTMLFormElement>,
};
export function RatingForm({ children, handleSubmit }: Prop) {
    return (
        <main className="card">
            <img className="block p-2 rounded-full bg-dark-blue" src={iconStar} alt="Orange Start" />
            <h1 className="text-2xl text-white">How did we do ?</h1>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated
                to help us improve our offering!
            </p>
            {children}
            <form onSubmit={handleSubmit}>
                <button type="submit" className="button rounded-full w-[70%] mx-auto bg-orange text-white text-center uppercase
            hover:bg-white hover:text-orange ">Submit</button>
            </form>
        </main>
    );
}
