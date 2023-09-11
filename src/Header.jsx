import Hero from "./header/Hero";
import Nav from "./header/nav";
function Header(){
    return(
        <> 
            <header className="container mx-auto">
                <Nav/>
                <Hero/>
            </header>
        </>
    )
}
export default Header;