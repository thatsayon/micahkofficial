'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Wrench, 
  HelpCircle, 
  Info, 
  Settings,
  LogOut
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Quote Requests', path: '/quote-requests', icon: FileText, badge: 3 },
  { name: 'Services', path: '/services', icon: Wrench },
  { name: 'FAQ', path: '/faq', icon: HelpCircle },
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">
             {/* Simple logo placeholder for the orange box with wind/lines */}
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M4 14h16"/>
               <path d="M4 10h16"/>
               <path d="M10 6h10"/>
             </svg>
          </div>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link href={item.path} key={item.name} className={`nav-item ${isActive ? 'active' : ''}`}>
              <item.icon className="nav-icon" size={20} />
              <span className="nav-label">{item.name}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar-placeholder">
             <img src="https://ui-avatars.com/api/?name=Sarah+Mitchell&background=c25e28&color=fff" alt="Sarah Mitchell" />
          </div>
          <div className="user-info">
            <span className="user-name">Sarah Mitchell</span>
            <span className="user-role">Super Admin</span>
          </div>
          <button className="logout-btn" onClick={() => router.push('/sign-in')}>
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
