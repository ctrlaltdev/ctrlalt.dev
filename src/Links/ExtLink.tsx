import * as React from 'react'

interface InterfaceExtLinkComponent {
  to: string
}

class ExtLink extends React.Component<InterfaceExtLinkComponent, {}> {

  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <a href={this.props.to} target="_blank">{this.props.children}</a>
    )
  }
}

export default ExtLink