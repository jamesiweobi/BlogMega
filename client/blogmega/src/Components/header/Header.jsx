import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTItleSmall'>Blog</span>
                <span className='headerTItleLarge'>Mega</span>
            </div>
            <img
                src='https://images.unsplash.com/photo-1483914764278-6f2b1e39bba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'
                className='headerImage'
                alt=''
            />
        </div>
    );
}
