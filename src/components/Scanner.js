import React, { Component } from 'react'
import BarcodeReader from 'react-barcode-reader'

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: 'No result',
      results:[]
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){  
          
    this.setState({
      result: `Run api call to reduce quantity of item ${data}`,
      results: [...this.state.results, data]
    })
  }
  handleError(err){
    console.error(err)
  }
  buildList = () => {
     let arr = this.state.results.map(item => {return `<li>${item} was purchased</li>`});
   return arr;
}
  render(){

    return(
      <div>
        <BarcodeReader
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        <ul>
          </ul>{this.state.results.map(item => {return <li>{item} was purchased</li>})}
      </div>
    )
  }
}