import { NextPage } from 'next';
import { wrapper } from '../app/store/store';
import { fetchStrapiContent, selectStrapiContent } from '../app/slices/strapiSlice';
import { useAppSelector } from '../app/hooks/useAppSelector';
import Link from 'next/link';

const Homepage: NextPage = () => {
  console.log(useAppSelector(state => selectStrapiContent(state, 'single', 'homepage')));


  return (
    <>
      TEST
  
      <Link href="/avis">
        avis
      </Link>
    </>
  );
};

export default Homepage;

Homepage.getInitialProps = wrapper.getInitialPageProps(store => async (context) => {
  await store.dispatch(fetchStrapiContent({ type: 'single', element: 'homepage' }));
});