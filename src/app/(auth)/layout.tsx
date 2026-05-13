import './auth.css';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&q=80')" }}></div>
      </div>
      <div className="auth-right">
        {children}
      </div>
    </div>
  );
}
