import Icon from "./components/Icon";
import Taskbar from "./components/Taskbar";
import Window from "./components/Window";
import './sass/Desktop.scss';

export default function Desktop() {
  return (
    <main className="desktop">
      <div className="desktop--icons">
        <Icon imagePath='/folder.png' label='Mentorship' />
        <Icon imagePath='/folder.png' label='About' />
        <Icon imagePath='/folder.png' label='Team' />
        <Icon imagePath='/folder.png' label='Our Product' />
        <Icon imagePath='/folder.png' label='Discord' />
        <Icon imagePath='/folder.png' label='Telegram' />
        <Icon imagePath='/folder.png' label='TouTube' />
      </div>
      <div className="watermark">
      </div>
      <Window imagePath='/folder.png' label='Mentorship' />
      <Taskbar />
    </main>
  )
}
