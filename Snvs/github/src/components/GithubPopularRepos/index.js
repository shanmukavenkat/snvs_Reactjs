import { Component } from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import Loader from 'react-loader-spinner'
import './index.css'

const languageFiltersData = [
  { id: 'ALL', language: 'All' },
  { id: 'JAVASCRIPT', language: 'Javascript' },
  { id: 'RUBY', language: 'Ruby' },
  { id: 'JAVA', language: 'Java' },
  { id: 'CSS', language: 'CSS' },
]

const API_STATUS = {
  INITIAL: 'INITIAL',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  LOADING: 'LOADING',
}

class GithubPopularRepos extends Component {
  state = {
    selectedLanguage: 'ALL',
    popularRepos: [],
    apiStatus: API_STATUS.INITIAL,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    this.setState({ apiStatus: API_STATUS.LOADING })
    const { selectedLanguage } = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`

    try {
      const response = await fetch(apiUrl)
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()

      const updatedData = data.popular_repos.map(repo => ({
        id: repo.id,
        name: repo.name || 'Unknown',
        avatarUrl: repo.avatar_url || '',
        starsCount: repo.stars_count || 0,
        forksCount: repo.forks_count || 0,
        issuesCount: repo.issues_count || 0,
      }))

      this.setState({
        popularRepos: updatedData,
        apiStatus: API_STATUS.SUCCESS,
      })
    } catch (error) {
      this.setState({ apiStatus: API_STATUS.FAILURE })
    }
  }

  changeLanguage = id => {
    this.setState({ selectedLanguage: id }, this.getPopularRepos)
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader color="#007BFF" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <p>Something went wrong. Please try again.</p>
    </div>
  )

  renderRepositoryList = () => {
    const { popularRepos } = this.state
    return (
      <ul className="repo-list">
        {popularRepos.map(repo => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    )
  }

  render() {
    const { selectedLanguage, apiStatus } = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-filters-container">
          {languageFiltersData.map(item => (
            <LanguageFilterItem
              key={item.id}
              id={item.id}
              language={item.language}
              isSelected={selectedLanguage === item.id}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </ul>
        {apiStatus === API_STATUS.LOADING && this.renderLoader()}
        {apiStatus === API_STATUS.FAILURE && this.renderFailureView()}
        {apiStatus === API_STATUS.SUCCESS && this.renderRepositoryList()}
      </div>
    )
  }
}

export default GithubPopularRepos
