import Icon from "./components/Icon";
import Taskbar from "./components/Taskbar";
import './sass/Desktop.scss';

export default function Desktop() {
  return (
    <main className="desktop">
      <div className="desktop--icons">
        <Icon imagePath='/folder.png' label='Documents' />
        <Icon imagePath='/folder.png' label='Documents' />
        <Icon imagePath='/folder.png' label='Documents' />
        <Icon imagePath='/folder.png' label='Documents' />
      </div>
      <div className="watermark">
      </div>
      <Taskbar />
    </main>
  )
}
