import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Movie from '../../types/movie';

import PageContent from '../../components/PageContent';
import SideBar from '../../components/SideBar';
import MovieInfo from '../../components/MovieInfo';
import MoviesList from '../../components/MoviesList';

import { Container, ReviewsContainer, Review } from './styles';

interface ReviewType {
  id: number;
  author: string;
  content: string;
}

interface DetailsRouteParams {
  movie_id: string | undefined;
}

const Details = () => {
  const { movie_id } = useParams<DetailsRouteParams>();

  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<ReviewType[]>();
  const [similarMovies, setSimilarMovies] = useState<Movie[]>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`,
    )
      .then(response => response.json())
      .then(response => setMovie(response));

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
