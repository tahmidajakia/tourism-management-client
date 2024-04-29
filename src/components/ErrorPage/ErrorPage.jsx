import { Link } from 'react-router-dom';
import error from '../../assets/eoor1.png'

const ErrorPage = () => {
    return (
        <div>
           <div className='flex justify-center mt-20'>
           <img src={error} alt="" />
           </div>
          <div className='text-center'>
          <Link to='/'>
           <button className='btn bg-green-800 text-white'>Go To Home</button>
           </Link>
          </div>
        </div>
    );
};

export default ErrorPage;