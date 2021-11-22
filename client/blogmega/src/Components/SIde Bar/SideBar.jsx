import './SideBar.css';

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>ABOUT ME</span>
                <img
                    src='https://i.pinimg.com/564x/04/5c/53/045c539f0a84487c87bc3c59b6647aac.jpg'
                    alt='profile pciture'
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat dolore ducimus veritatis
                    tempora recusandae similique eveniet esse tenetur harum?
                </p>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>CATEGORIES</span>
                <ul className='sideBarList'>
                    <li className='sideBarListItem'>Life</li>
                    <li className='sideBarListItem'>Music</li>
                    <li className='sideBarListItem'>Style</li>
                    <li className='sideBarListItem'>Sport</li>
                    <li className='sideBarListItem'>Tech</li>
                    <li className='sideBarListItem'>Cinema</li>
                </ul>
            </div>
            <div className='sideBarItem'>
                <span className='sideBarTitle'>FOLLOW US</span>
                <div className='sideBarSocial'>
                    <i className='sideBarIcon fab fa-facebook-f'></i>
                    <i className='sideBarIcon fab fa-instagram'></i>
                    <i className='sideBarIcon fab fa-linkedin-in'></i>
                    <i className='sideBarIcon fab fa-twitter'></i>
                </div>
            </div>
        </div>
    );
}
