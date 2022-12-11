import React, { Component} from "react";


class MovieDetails extends Component{
    render() {
        return (
            <section className="grid grid-cols-[300px_minmax(900px,_1fr)_0px] my-20 mx-10 gap-10">
                <div className="flex justify-center items-center border-[1px] border-[#dedede] rounded-[8px]">
                    <img src={require('../../Assets/Image/imageMovie1.png')} alt="{movieTitle}" className="w-[12rem]" />
                </div>
                <div className="font-mulish w-[46rem]">
                    <div className="flex flex-col font-mulish gap-2]">
                        <span className="font-mulish text-3xl font-bold">Spider-Man: Homecoming</span>
                        <span className="text-lg text-[#4E4B66]">Adventure, Action, Sci-Fi</span>
                    </div>
                    <div className="grid grid-cols-2 mt-8 gap-5">
                        <div className="flex flex-col">
                            <span className="text-[#8692A6]">Release date</span>
                            <span>June 28, 2017</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#8692A6]">Directed by</span>
                            <span>Jon Watss</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#8692A6]">Duration</span>
                            <span>2 hours 13 minutes </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#8692A6]">Casts</span>
                            <span>Tom Holland, Michael Keaton, Robert Downey Jr.</span>
                        </div>
                    </div>
                    <div className="mt-10">
                        <span className="text-xl font-bold">Sinopsys</span>
                        <p className="mt-2">
                            Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
};


export default MovieDetails;