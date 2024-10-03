export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <h4>Card Event! Right now, Click!</h4>
                {children}
            </body>
        </html>
    );
}
