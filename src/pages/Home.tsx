import { serviceAxios } from '../utils';
import { useContext } from 'react';
import { ReduxContext } from '../redux';

const Home = () => {
  const { state, dispatch } = useContext(ReduxContext);
  console.log(state, dispatch, serviceAxios);

  return <div>Home</div>;
};

export default Home;
