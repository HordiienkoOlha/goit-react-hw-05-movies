import Container from 'components/Container';
import MoviesList from 'components/MoviesList/MoviesList';
import Hero from 'components/Hero/Hero'

export default function HomeView() {
  return (
    <>
      <Container>
        <Hero/>
        <MoviesList />
        </Container>
    </>
  );
}
