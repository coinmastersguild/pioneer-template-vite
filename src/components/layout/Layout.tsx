import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;

}>) {

    return (
        <div className="flex flex-col p-5">
            <div className="flex flex-row items-center justify-center px-8 lg:px-24">
                <TopBar />
            </div>

            <main>{children}</main>

            <Footer />
        </div>
    )
}