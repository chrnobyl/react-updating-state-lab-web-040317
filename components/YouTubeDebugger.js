import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {

      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.handleChangeRes = this.handleChangeRes.bind(this)
    this.handleChangeBit = this.handleChangeBit.bind(this)
  }

  handleChangeRes (){
    console.log('res')
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  handleChangeBit (){
    console.log('bit')
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    })
  }



  render() {

    return(
      <div>
        <button onClick={this.handleChangeRes} className='resolution'>Resolution</button>
        <button onClick={this.handleChangeBit} className='bitrate'>Bitrate</button>
      </div>

    )
  }
}

export default YouTubeDebugger;
