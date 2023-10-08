import NavBar from "../NavBar";

export default function ProtectedLayout({ children }) {
    return (
        <div className="ProtectedLayout">
            <NavBar></NavBar>
            <div className="ProtectedLayoutChildren">
                {children}
            </div>
        </div>
    )
}