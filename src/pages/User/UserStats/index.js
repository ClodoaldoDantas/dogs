import React, { useEffect } from 'react';
import Head from '../../../components/Head';
import { useFetch } from '../../../hooks/useFetch';
import api from '../../../services/api';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import UserStatsGraphs from '../UserStatsGraphs';

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
    <div>
      <Head title='Estatísticas' />
      <UserStatsGraphs data={data} />
    </div>
  );
}
