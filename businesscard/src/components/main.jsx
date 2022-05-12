import cover from './images/cover.jpg';

export default function Main() {
  return (
    <div className="Main">
      <div className="Img">
        <img src={cover} />
      </div>
      <div className="Text">
        <div className="name">Stephen Muchendu</div>
        <div className="role">FullStack Developer</div>
        <a className="Website">MilkyWay.Muchendu</a>
        <div className="Buttons">
          <button type="button" className='btn btn1'>Email</button>
          <button type="button" className='btn btn2'>LinkedIn</button>
        </div>
      </div>
    </div>
  );
}
