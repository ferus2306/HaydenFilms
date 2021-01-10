import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom'
import React from 'react'

// const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ( props ) => {

    console.log(props);
    return (
            <MDBRow>
                <MDBCol sm="12" className=" d-flex flex-wrap justify-content-center justify-content-between">
                {props.movies.map((movie, index) => (
                        <Link to={`/details/${movie.imdbID}`} key={index} className="py-3">
                            <MDBCard >
                                    <MDBCardImage className="img-fluid" src={movie.Poster} waves />
                                    <MDBCardBody>
                                <MDBBtn className="" color="elegant" href="#">WATCH</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
                    ))}
                </MDBCol>
            </MDBRow>
    )
}

export default Movie
