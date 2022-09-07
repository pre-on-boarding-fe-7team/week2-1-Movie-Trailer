import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getUpcomingMovies } from '../../api/api';

const useInfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status } = useInfiniteQuery(
    'getUpcomingMovieList',
    ({ pageParam = 1 }) => getUpcomingMovies(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = Math.ceil(lastPage.total_results / 20);
        const nextPage = allPages.length + 1;

        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async e => {
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [hasNextPage, fetchNextPage]);

  return [data, status];
};

export default useInfiniteScroll;
