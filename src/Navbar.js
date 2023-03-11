const Navbar = () => {
    return (
    <div className="nav">
        <h1> The LinkedIn Mentor</h1>
        <div className="links" >
            <a href="/" style={{ color: 'white', padding: 10 }}> Home </a>
            <a href="/callback"style={{ color: 'white', padding: 10 }}> Upload </a>
            {/*<a href="/AuthPage"style={{ color: 'white', padding: 10 }}> Login </a>*/}
            {/*<a href="/checkpoint/lg/login-submit"style={{ color: 'white', padding: 10 }}> Login Submit </a>*/}
        </div>
    </div>  
    );
}
 
export default Navbar;