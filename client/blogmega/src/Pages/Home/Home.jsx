import './Home.css';
import Header from '../../Components/header/Header';
import Posts from '../../Components/Posts/Posts';
import SideBar from '../../Components/SIde Bar/SideBar';

export default function Home() {
    return (
        <>
            <Header />
            <div className='home'>
                <SideBar />
                <Posts />
            </div>
        </>
    );
}
