import React, { useState} from 'react';
import { MDBContainer, MDBTypography } from 'mdbreact';
import Header from '../components/Header'
import Movie from './Movie';


const Dashboard = () => {
    const [movies] = useState([
        {
            "Title": "Captain Marvel",
            "Year": "2019",
            "imdbID": "tt4154664",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel One-Shot: All Hail the King",
            "Year": "2014",
            "imdbID": "tt3438640",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel One-Shot: Agent Carter",
            "Year": "2013",
            "imdbID": "tt3067038",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel One-Shot: Item 47",
            "Year": "2012",
            "imdbID": "tt2247732",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
            "Year": "2011",
            "imdbID": "tt2011109",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel One-Shot: The Consultant",
            "Year": "2011",
            "imdbID": "tt2011118",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Lego Marvel Super Heroes",
            "Year": "2013",
            "imdbID": "tt2620204",
            "Type": "game",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5ODA2NTI2M15BMl5BanBnXkFtZTgwNTcxMzU1MDE@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel Studios: Assembling a Universe",
            "Year": "2014",
            "imdbID": "tt3591568",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjNiN2NhYzQtYmI1NC00NGRmLWE2MWYtNjAxNjMzZmYxNDJhXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_SX300.jpg"
        },
        {
            "Title": "Adventures of Captain Marvel",
            "Year": "1941",
            "imdbID": "tt0033317",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjg0NTk3NjUyNF5BMl5BanBnXkFtZTgwNDQ5MjM1MjE@._V1_SX300.jpg"
        },
        {
            "Title": "Lego Marvel Super Heroes: Maximum Overload",
            "Year": "2013–",
            "imdbID": "tt3322904",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZWUzMjMxNmItNDRjYi00NGQ0LTk1NTQtYWIwMzQwNGNlYWRiXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
        }
    ])
    
    return (
        <div>        
            <Header />
            <MDBTypography className="text-center py-4" tag='h1' variant="h1">Hayden Films</MDBTypography>
            <MDBContainer>
                <Movie movies={movies} />
            </MDBContainer>
        </div>
  )
}

export default Dashboard;