import { Component } from "react";

class App extends Component{
  state ={
    thenewData:[]
  }

  componentDidMount(){
    this.getTheData();
  }
  getTheData = async() =>{
  const response = await fetch('https://dummyjson.com/users') 
  const data = await response.json()
  console.log(data)
  this.setState({thenewData:data.users})
  }

  render(){
    const {thenewData} = this.state  
    return(
  <>
      <h1>name</h1>
      {thenewData.map((each) =>(
    <div key={each.id}>        
       <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {thenewData.map((each) => (
            <tr key={each.id}>
              <td>{each.firstName}</td>
              <td>{each.lastName}</td>
              <td>{each.age}</td>
              <td>{each.gender}</td>
              <td>{each.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      )
      )}
  </>
    )
  }
}

export default App