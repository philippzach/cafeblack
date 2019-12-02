import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

export default class Test extends Component {
  render() {
    console.log(this.props.url)
    return (
      <Document file={this.props.url} onLoadSuccess={this.onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
    )
  }
}
