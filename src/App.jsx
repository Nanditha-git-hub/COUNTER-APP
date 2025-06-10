import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count:0,
    }
  }

  handleIncrement=()=>{
    this.setState({count:this.state.count + 1})
  }

  handleDecrement=()=>{
    this.setState({count:this.state.count - 1})
  }

  render(){
    return (
      <div style={{height:"100vh",textAlign:"center",alignItems:"center",justifyContent:"center",display:"flex"}}>
      <div style={{border:"2px solid white", alignItems:"center", width:"50%" ,textAlign:"center", justifyContent:"center",padding:"20px"}}>
        <h1 style={{color:"white",fontWeight:"bolder"}}>COUNTER</h1>
        <h1 style={{color:"white",fontWeight:"bolder"}}>{this.state.count}</h1>
        <div style={{display:"flex",textAlign:"center",gap:"40px", alignItems:"center",justifyContent:"center"}}>
        <button style={{backgroundColor:"purple",borderRadius:"3px",padding:"10px 20px",color:"white",cursor:"pointer"}} onClick={this.handleDecrement}disabled={this.state.count===0}>Decrement</button>
        <button style={{backgroundColor:"purple",borderRadius:"3px",padding:"10px 20px",color:"white",cursor:"pointer"}} onClick={this.handleIncrement}disabled={this.state.count===10}>Increment</button>
        </div>
      </div>
      </div>
    )
  }

}

export default App;