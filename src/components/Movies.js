import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBTypography } from 'mdbreact';

const Movies = () => {
    return (
        <MDBContainer>
            <MDBTypography className="text-center py-4" tag='h1'>Hayden Films</MDBTypography>




            <MDBCol sm="12" md="4" lg="3">
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                    waves />
                    <MDBCardBody>
                    <MDBBtn href="#">Click</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>




        </MDBContainer>
  )
}

export default Movies;