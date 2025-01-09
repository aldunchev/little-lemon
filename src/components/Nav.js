import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className='container'>
      <nav className='flex items-center gap-4'>
        <Link to='/' className='block p-2 hover:underline'>
          Homepage
        </Link>
        <Link to='/booking' className='block p-2 hover:underline'>
          Booking
        </Link>
      </nav>
    </div>
  );
}
