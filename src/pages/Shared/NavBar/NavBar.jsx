import { Container } from "postcss";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <>
            <div className="bg-rose-100 w-full fixed z-10 shadow-sm">
                <Container>
                    <Logo></Logo>
                </Container>
            </div>
        </>
    );
};

export default NavBar;
