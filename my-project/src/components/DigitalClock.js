import React from 'react'

class DigitalClock extends React.Component {
   constructor(props){
    super(props)
    this.state = {
        date: new Date() 
    }// 创建一个state，称为date赋值new Date()，new Date()对象指向当前的时间
   } 
   componentDidMount() {
       this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
       }, 1000) // 当前时间每一秒更新一次
   }
   componentDidUpdate(currentProps, currentState) {
        console.log(currentState)
   }// 接受两个参数(nextProps, state)，既传入的一个变化
   componentWillUnmount() {
       clearInterval(this.timer)//删除定时器timer.
   }
  render() {
      return (
          <div className="digital-clock-component jumbotron">
              <h1>{this.state.date.toLocaleTimeString()}</h1>
          </div>
      )
  }
}

export default DigitalClock