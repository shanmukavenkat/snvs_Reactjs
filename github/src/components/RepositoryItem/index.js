import './index.css'

const RepositoryItem = ({ repository }) => {
  const { name, avatarUrl, starsCount, forksCount, issuesCount } = repository

  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="repo-avatar" />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-details">
        <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="stars" />
        <p>{starsCount}</p>
      </div>
      <div className="repo-details">
        <img src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png" alt="forks" />
        <p>{forksCount}</p>
      </div>
      <div className="repo-details">
        <img src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png" alt="open issues" />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
