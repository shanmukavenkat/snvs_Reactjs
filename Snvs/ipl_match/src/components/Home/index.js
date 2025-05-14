import { Component } from 'react';
import './index.css';
import TeamCard from '../TeamCard';

class Home extends Component {
  state = { newData: [] };

  componentDidMount() {
    this.getTeamdata();
  }

  getTeamdata = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl');
    if (response.ok) {
      const data = await response.json();
      const theNewData = data.teams.map((each) => ({
        id: each.id,
        imageUrl: each.team_image_url,
        teamName: each.name,
      }));
      console.log(theNewData);
      this.setState({ newData: theNewData });
    } else {
      console.error('Failed to fetch data');
    }
  };

  render() {
    const { newData } = this.state;

    return (
      <div className="body">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="img-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list-item">
          {newData.map((eachItem) => (
            <TeamCard teamCardData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
