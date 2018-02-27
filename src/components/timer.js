import React from 'react'
import moment from 'moment'
import momentDurationFormat from 'moment-duration-format'

momentDurationFormat(moment)

class Timer extends React.Component {
  state = {
    remaining: moment.duration(0)
  }

  componentWillMount() {
    this.tick()
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    const remaining = moment.duration(-1 * moment().diff(this.props.to))
    this.setState({ remaining })
  }

  render() {
    const { remaining } = this.state
    return <time>{remaining.format('DD:HH:mm:ss', { trim: false })}</time>
  }
}

export default Timer
