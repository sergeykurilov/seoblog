import Header from "./Header";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <div className="container">
                <p>Footer</p>
            </div>
        </>
    )
}