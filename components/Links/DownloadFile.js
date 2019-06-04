const DownloadFile = (props) => (
  <a href={props.src} download>{props.children}</a>
)

export default DownloadFile
