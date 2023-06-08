
import Container from "../../../components/Container";
import Logo from "./Logo";
import NavListOption from "./NavListOption";
import ProfileLoginLogout from "./ProfileLoginLogout";

const NavBar = () => {
    return (
        <>
            <div className="bg-rose-100 w-full fixed z-10 shadow-sm">
                <Container>
                    <Logo></Logo>
                    <NavListOption></NavListOption>
                    <ProfileLoginLogout></ProfileLoginLogout>
                </Container>
            </div>
        </>
    );
};

export default NavBar;
