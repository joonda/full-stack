export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h4>Card Event! Right now, Click!</h4>
            {children}
        </div>
    );
}


