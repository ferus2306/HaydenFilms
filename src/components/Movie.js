import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBadge, MDBIcon } from 'mdbreact';
// import { Link } from 'react-router-dom'
import React from 'react'

// const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ( props ) => {

    console.log(props);
    return (
            <MDBRow>
                <MDBCol sm="12" className=" d-flex flex-wrap justify-content-center justify-content-between">
                {props.movies.map((movie, index) => (
                        <div key={index} className="py-3">
                            <MDBCard >
                                <MDBCardImage className="img-fluid" src={movie.Poster} waves />
                            <MDBCardBody>
                                
                                <MDBBtn className="" color="elegant" href="/details/">Watch <MDBBadge pill tag="a" color="danger" className=""> 8/10</MDBBadge></MDBBtn>

                                <MDBIcon color="" className="p-2" far icon="heart" />
                    
                            </MDBCardBody>
                            </MDBCard>
                        </div>
                    ))}
                </MDBCol>
            </MDBRow>
    )
}

export default Movie
