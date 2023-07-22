
import { useGetMovieKpRatingQuery, useGetMovieForMainPageQuery } from '../Api/Api'

export default function Rand() {

  const {data = []} = useGetMovieKpRatingQuery()

  console.log(data)
  return (
    'fsdfsd'
  );
}

