// Завдання 1 - Профіль соціальної мережі
import s from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profileCard}>
      <div>
        <div className={s.imageCircle}>
          <img className={s.image}
          src={image}
          alt={name}
          />
        </div>
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span>Followers</span>
          <span className={s.statsNumber}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span>Views</span>
          <span className={s.statsNumber}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span>Likes</span>
          <span className={s.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
</div>);
};

export default Profile