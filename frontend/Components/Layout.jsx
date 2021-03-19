import Header from "./Header";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <p>Footer</p>
        </>
    )
}