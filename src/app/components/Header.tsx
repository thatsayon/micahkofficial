import './Header.css';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <header className="header">
      <div className="header-date">
        {currentDate}
      </div>
      <div className="header-actions">
        <img src="https://ui-avatars.com/api/?name=Sarah+Mitchell&background=c25e28&color=fff" alt="Profile" className="header-avatar" />
      </div>
    </header>
  );
}
