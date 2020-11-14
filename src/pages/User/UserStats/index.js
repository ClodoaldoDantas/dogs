import React, { useEffect, lazy, Suspense } from 'react';
import Head from '../../../components/Head';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

const UserStatsGraphs = lazy(() => import('../UserStatsGraphs'));

export default function UserStats() {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = api.statsGet();
      request(url, options);
    }

    getData();
  }, [request]);

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <Suspense fallback={<div></div>}>
      <Head title='Estatísticas' />
      <UserStatsGraphs data={data} />
    </Suspense>
  );
}
