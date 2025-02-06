// TeamCard.js

import { Link } from 'react-router-dom';
import './index.css';

const TeamCard = ({ teamCardData }) => {
  const { id, imageUrl, teamName } = teamCardData;

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="card_item">
        <div>
          <img src={imageUrl} alt={teamName} />
        </div>
        <div>
          <h1>{teamName}</h1>
        </div>
      </li>
    </Link>
  );
};

export default TeamCard;
