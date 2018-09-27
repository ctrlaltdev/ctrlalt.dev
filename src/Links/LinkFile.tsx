import * as React from 'react'

interface InterfaceLinkFileComponent {
  to: string
}

class LinkFile extends React.Component<InterfaceLinkFileComponent, {}> {

  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <a href={this.props.to}>{this.props.children}</a>
    )
  }
}

export default LinkFile