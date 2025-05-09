import { NavLink } from 'react-router-dom';
import classes from './PostsNavigation.module.css';

function PostsNavigation(){
    return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/posts" className={({isActive}) => isActive ? classes.active : undefined} end>All Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default PostsNavigation