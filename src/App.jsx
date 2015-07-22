import React from 'react'
import Firebase from 'firebase'
import classname from 'classname'
// store
class DegreeStorage {
  constructor(){
    this.url = "https://torid-fire-7950.firebaseio.com/"
    this.degrees = new Firebase(this.url + "degree_log")
  }
  degreePromise(limit = 60){
    return new Promise((resolve, reject) => {
      let logs = []
      this.degrees.limitToLast(limit).on("value", function(snapshot){
        snapshot.forEach(function(log){
          logs.unshift({
            key: log.key(),
            val: log.val()
          })
        })
        resolve(logs)
      })
    })
  }
}

class LogItem extends React.Component{
  ceil(num, digit = 100){
    return Math.ceil(num * digit) / digit
  }
  calcPastTime(timeStr){
    try{
      var sec = ((new Date() - new Date(timeStr)) / 1000 )
      var min = sec / 60
    }catch(e){
    }
    return Math.ceil(min)
  }
  isCurrent(pastTime){
    return (pastTime < 10)
  }
  isHighDegree(degree){
    return (degree > 27)
  }
  render(){
    let {time, degree} = this.props.log
    let pastTime = this.calcPastTime(time)
    let color = this.isHighDegree(degree) ?  "red" : "blue"
    let currency = this.isCurrent(pastTime) ? "" : "lighten-4"
    let containerCx = classname(["card", color, currency])
    return <div className={containerCx} >
      <div className="card-content">
        <span className=" degree">{this.ceil(degree)} °</span>
        <span className="right timestamp">{pastTime} min ago</span>
      </div>
    </div>
  }
}

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      logs: []
    }
  }
  componentDidMount(){
    var degreeStorage = new DegreeStorage()
    degreeStorage.degreePromise().then((logs) => {
      this.setState({
        logs: logs
      })
    })
  }
  render(){
    let {logs} = this.state
    let logItems = logs.map((log) => { 
      return <LogItem key={log.key} log={log.val} /> 
    })
    return <div>
      <h1>Ondo</h1>
      {logItems}
    </div>
  }
}