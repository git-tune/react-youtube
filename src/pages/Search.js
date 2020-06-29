import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { useLocation } from 'react-router-dom';
import { fetchSearchData } from '../apis/index';
import { Store } from '../store/index';
import VideoGrid from '../components/VideoGrid/VideoGrid';
import VideoGridItem from '../components/VideoGridItem/VideoGridItem';

const Search = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSearchResult = async () => {
    const searchPrams = new URLSearchParams(location.search);
    const query = searchPrams.get('query');
    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({
          type: 'SET_SEARCHED',
          payload: { searched: res.data.items },
        });
      });
    }
  };
  useEffect(() => {
    setSearchResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  return (
    <div>
      <Layout>
        <VideoGrid>
          {globalState.searched ? (
            globalState.searched.map((search) => {
              return (
                <VideoGridItem
                  id={search.id.videoId}
                  key={search.id.videoId}
                  src={search.snippet.thumbnails.medium.url}
                  title={search.snippet.title}
                />
              );
            })
          ) : (
            <span>no data</span>
          )}
        </VideoGrid>
      </Layout>
    </div>
  );
};

export default Search;
