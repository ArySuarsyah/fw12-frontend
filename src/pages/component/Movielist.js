import React, { Fragment } from "react";
import axios from "axios";


function MovieGrid({movies}) {
        const picture = `https://www.themoviedb.org/t/p/w116_and_h174_face/${movies.poster_path}`
        return (
            <div className="inline-block p-8 m-3 w-[13rem]  rounded border-2 border-[#dedede] bg-neutral-100 relative overflow-y-hidden text-center movieParent">
                <img src={picture} alt={movies.title} className="w-40 rounded m-auto" />
                <div className="grid grid-rows-3 grid grid-rows-[1fr_minmax(90px,_1fr)_0px]">
                    <div className="flex justify-center items-center font-bold text-[14px] font-mulish w-40 text-center h-20 whitespace-normal m-auto">
                        {movies.title}
                    </div>
                    <div>
                        <span className="font-mulish">
                            genre
                        </span>
                    </div>
                    <div className="self-end">
                        <button className="font-mulish border-[1px] rounded border-blue-600 w-40 h-9 text-sm text-blue-500 bg-[#dedede]">Detail</button>
                    </div>
                </div>
            </div>
        )
}

function Movielist() {
    const [moviesData, setMovie] = React.useState({});

    const getMovieData = async () => {
        const { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0425e48e1b84cac8b5d27b8c9980a9ba&language=en-US&page=1');
        
        return data
    }

    React.useEffect(() => {
        getMovieData().then(data => {
            setMovie(data)
        });
    }, [])


    return (
        <Fragment>
            <div className="whitespace-nowrap overflow-x-scroll bg-[#fff] w-full">
                {moviesData?.results?.map((movie) => {
                    return <MovieGrid movies={movie} />
                })}
            </div>
        </Fragment>
    )
}

export default Movielist;