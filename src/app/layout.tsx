// app/layout.js
export const metadata = {
    title: 'My App',
    description: 'This is a Next.js app',
  };

  type Childrenprop = {
    children: any
  }
  
  export default function RootLayout({ children } : Childrenprop ) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  