import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Movie from '../../types/movie';

import PageContent from '../../components/PageContent';
import SideBar from '../../components/SideBar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import defaultActorImage from '../../assets/not-found.png';

import {
  Container,
  CastContainer,
  Actor,
  ReviewsContainer,
  Review,
} from './styles';

interface ReviewTypes {
  id: number;
  author: string;
  content: string;
}

interface ActorTypes {
  id: number;
  name: string;
  profile_path: string;
}

interface DetailsRouteParams {
  movie_id: string | undefined;
}

const Details = () => {
  const { movie_id } = useParams<DetailsRouteParams>();

  const [movie, setMovie] = useState<Movie>();
  const [actors, setActors] = useState<ActorTypes[]>();
  const [reviews, setReviews] = useState<ReviewTypes[]>();
  const [similarMovies, setSimilarMovies] = useState<Movie[]>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => setMovie(response));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => setActors(response.cast));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => setReviews(response.results));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => setSimilarMovies(response.results));
  }, [movie_id]);

  return (
    <Container>
      <SideBar />

      <PageContent>
        {movie && <MovieInfo movie={movie} />}

        {actors && (
          <CastContainer>
            <h2>Cast</h2>

            {actors[0] ? (
              <div>
                {actors.map(actor => (
                  <Actor key={actor.id}>
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                          : defaultActorImage
                      }
                      alt="img"
                    />
                    <h3>{actor.name}</h3>
                  </Actor>
                ))}
              </div>
            ) : (
              <h3>This movie has no actors.</h3>
            )}
          </CastContainer>
        )}

        {reviews && (
          <ReviewsContainer>
            <h2>Reviews</h2>

            {reviews[0] ? (
              <div>
                {reviews.map(review => (
                  <Review key={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                  </Review>
                ))}
              </div>
            ) : (
              <h3>This movie has no reviews yet.</h3>
            )}
          </ReviewsContainer>
        )}

        {similarMovies && (
          <MoviesList
            title="Similar Movies"
            movies={similarMovies}
            notFound="This film has no recommendations."
          />
        )}
      </PageContent>
    </Container>
  );
};

export default Details;
