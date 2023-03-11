const Navbar = () => {
    return (
    <div className="nav">
        <h1> The LinkedIn Mentor</h1>
        <div className="links" >
            <a href="/home" style={{ color: 'white', padding: 10 }}> Home </a>
            <a href="/upload"style={{ color: 'white', padding: 10 }}> Upload </a>

        </div>
    </div>  
    );
}
 
export default Navbar;