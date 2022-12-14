import React from 'react'

export default function FormMovie(props) {
    return (
        <section>
            <span>{props.title}</span>
            <div>
                <div>
                    <div>
                        <img src={props.image} alt="Movie" />
                    </div>
                    <div>
                        <div>
                            <label for="name">Movie Name</label>
                            <input type={props.input1} />
                        </div>
                        <div>
                            <label for="category">Category</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="director">Director</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="casts">Casts</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="releaseDate">Release date</label>
                            <input type="text" />
                        </div>
                        <div>
                            <div>
                                <label for="durationHour">Duration Hour</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label for="durationMinute">Duration Minute</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
