import { NextPage } from 'next';
import { wrapper } from '../common/store/store';
import { fetchStrapiContent, selectStrapiContent } from '../common/slices/strapiSlice';
import { useAppSelector } from '../common/hooks/useAppSelector';
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