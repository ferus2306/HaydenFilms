import { MDBCol, MDBRow, MDBTypography } from 'mdbreact';
import { MDBMedia, MDBIcon } from 'mdbreact';
import React from 'react';
// import trailer from '../assets/video/trailer.mp4'
// import iron from '../assets/video/iron.mp4'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

const MovieDetails = () => {
    return (
        <MDBRow className="pt-4">
            
            <MDBCol sm="12">
                <MDBTypography variant="display-4" className="text-center">TITLE</MDBTypography>
            </MDBCol>
            {/* VIDEO */}
            <MDBCol sm="12" md="5">
                {/* <video className="" width="100%" height="260px" controls>
                    <source src={iron} type="video/mp4"></source>
                    <source src="movie.ogg" type="video/ogg"></source>
                    Your browser does not support the video tag.
                </video> */}

                <Plyr 
                    type="youtube" // or "vimeo"
                    videoId='https://www.youtube.com/watch?v=osSJhXruEzU' />
            </MDBCol>

            {/* DESCRIPTION */}
            <MDBCol sm="" md="7">
                <p>
                    When history tells the story of the Marvel Cinematic Universe, 
                    the tale will always begin with the introduction of Tony Stark (Robert Downey Jr.) in Jon Favreau's Iron Man. 
                    An engineering prodigy and genius who follows in his father's footsteps to run the world's biggest weapons manufacturer, 
                    Tony is first presented as a careless playboy only interested in making money. That all changes, however, when he is kidnapped 
                    by a deadly terrorist organization demanding his technology. With the help of a fellow hostage, Ho Yinsin (Shaun Toub), 
                    he uses his ingenuity to design a suit of armor to escape... but it's an experience that winds up haunting him.
                </p>
            </MDBCol>

            {/* OTHER */}
            <MDBCol className="py-4" sm="12" md="5">
                <MDBTypography>
                    <MDBMedia list className="mt-3">
                    <MDBMedia tag="li">
                        <MDBMedia left href="#">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
                        </MDBMedia>
                        <MDBMedia body>
                        <MDBMedia heading>
                            Anna Smith
                            </MDBMedia>
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="grey-text" />
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </MDBMedia>
                    </MDBMedia>
                    <MDBMedia tag="li">
                        <MDBMedia left href="#">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
                        </MDBMedia>
                        <MDBMedia body>
                        <MDBMedia heading>
                            Anna Smith
                            </MDBMedia>
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="grey-text" />
                        <MDBIcon icon="star" className="grey-text" />
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </MDBMedia>
                    </MDBMedia>
                    <MDBMedia tag="li">
                        <MDBMedia left href="#">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
                        </MDBMedia>
                        <MDBMedia body>
                        <MDBMedia heading>
                            Natalie Doe
                            </MDBMedia>
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="blue-text" />
                        <MDBIcon icon="star" className="grey-text" />
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </MDBMedia>
                    </MDBMedia>
                    </MDBMedia>
                </MDBTypography>
            </MDBCol>
        </MDBRow>
        
  )
}

export default MovieDetails;