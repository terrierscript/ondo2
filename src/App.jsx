import React from 'react'
import Firebase from 'firebase'
import classname from 'classname'
import {fetchDegree} from "./mackrel"

class Icon extends React.Component{
  render(){
    let {size, icon} = this.props
    let cx = ["material-icons"]
    if(size) cx.push(size)
    return <i className={classname(cx)}>{icon}</i>
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
      return Math.ceil(min)
    }catch(e){
    }
  }
  isCurrent(pastTime){
    return (pastTime < 10)
  }
  isHighDegree(degree){
    return (degree > 27)
  }
  getIcon(degree){
    return this.isHighDegree(degree) ? <Icon icon="report_problem"/> : <Icon icon="info_outline" />
  }
  render(){
    let {time, degree} = this.props
    let pastTime = this.calcPastTime(time)
    let color = this.isHighDegree(degree) ?  "red" : "blue"
    let icon = this.getIcon(degree)

    let currency = this.isCurrent(pastTime)
      ? ["darken-1"]
      : ["lighten-3"]
    let containerCx = classname(["card", color, currency])
    return <div className={containerCx} >
      <div className="card-content">
        <b className="">
          {this.ceil(degree)} °
        </b>
        <div className="right timestamp">
          {pastTime} min ago
        </div>
      </div>
    </div>
  }
}

const Loading = () => (
  <div className="center-align">
    <div>Loading...</div>
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  </div>
)

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      logs: []
    }
  }
  componentDidMount(){
    fetchDegree().then((items) => {
      this.setState({
        logs: items
      })
    })

  }
  render(){
    let {logs} = this.state
    let logItems = logs.slice(0, 60).map((log, i) => {
      return <LogItem key={i} time={log.time * 1000} degree={log.value} /> 
    })
    return <div>
      { (logItems.length === 0) ? <Loading /> : logItems }
    </div>
  }
}