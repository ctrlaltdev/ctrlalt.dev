import * as React from 'react'

interface InterfaceDownloadFileComponent {
  src: string
}

class DownloadFile extends React.Component<InterfaceDownloadFileComponent, {}> {

  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <a href={this.props.src} download>{this.props.children}</a>
    )
  }
}

export default DownloadFile