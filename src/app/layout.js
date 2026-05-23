import "./globals.css";

export const metadata = {
  title: "Tic-Tac-Toe",
  description: "Tic-Tac-Toe tutorial from the React documentation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
