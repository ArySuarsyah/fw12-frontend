import React from 'react'

export default function FormMovie(props) {
    return (
        <section className='font-mulish p-10'>
            <span>Form Movie</span>
            <div>
                <div className='flex gap-20 border-[1px] border-black h-96 items-center mt-10 py-10 px-10'>
                    <div className='border-[1px] border-[#dedede] rounded-[8px] flex justify-center items-center h-full w-60'>
                        <img src={require('../../../Assets/Image/movieImage1.png')} alt="Movie" className='w-40' />
                    </div>
                    <form className='grid grid-cols-2 gap-10 text-[#4E4B66]'>
                        <div className='flex  flex-col gap-2'>
                            <label for="name">Movie Name</label>
                            <input type='text' id='name' className='formManageMovie' autoComplete="off" />
                        </div>
                        <div className='flex  flex-col gap-2'>
                            <label for="category">Category</label>
                            <input type="text" id="category" className='formManageMovie' />
                        </div>
                        <div className='flex  flex-col gap-2'>
                            <label for="director">Director</label>
                            <input type="text" id='direector' className='formManageMovie' />
                        </div>
                        <div className='flex  flex-col gap-2'>
                            <label for="casts">Casts</label>
                            <input type="text" id='casts' className='formManageMovie' />
                        </div>
                        <div className='flex  flex-col gap-2'>
                            <label for="releaseDate">Release date</label>
                            <input type="text" id='releaseDate' className='formManageMovie' />
                        </div>
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-2'>
                                <label for="durationHour">Duration Hour</label>
                                <input type="text" id='durationHour' className='formDuration' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label for="durationMinute">Duration Minute</label>
                                <input type="text" id='durationMinute' className='formDuration' />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>Synopsis</h3>
                    <span>Thrilled by his experience with the Avengers, Peter returns home, where he
                        lives with his Aunt May, |
                    </span>
                </div>
            </div>
        </section>
    )
}
