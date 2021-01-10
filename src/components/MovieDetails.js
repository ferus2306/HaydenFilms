import { MDBCol, MDBRow, MDBTypography } from 'mdbreact';
import { MDBMedia, MDBIcon } from 'mdbreact';
import React from 'react';
import trailer from '../assets/video/trailer.mp4'

const MovieDetails = () => {
    return (
        <MDBRow className="pt-4" center>
            {/* VIDEO */}
            <MDBCol sm="12" md="4">
                <video className="" width="100%" height="100%" controls>
                    <source src={trailer} type="video/mp4"></source>
                    <source src="movie.ogg" type="video/ogg"></source>
                    Your browser does not support the video tag.
                </video>
            </MDBCol>

            {/* DESCRIPTION */}
            <MDBCol sm="" md="8">
                <MDBTypography>DESCRIPTION</MDBTypography>
            </MDBCol>

            {/* OTHER */}
            <MDBCol className="py-4" sm="12" md="6">
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