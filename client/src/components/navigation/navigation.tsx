import { Link } from '@tanstack/react-router';
import { Home, Book, Sparkles, Calendar, Settings } from 'lucide-react';

import './navigation.module.css';

const navItems = [
  {
    href: '/dashboard',
    label: 'Home',
    icon: Home,
  },
  {
    href: '/recipes',
    label: 'Recipes',
    icon: Book
  },
  {
    href: '#',
    label: 'Generate',
    icon: Sparkles
  },
  {
    href: '#',
    label: 'Plan',
    icon: Calendar
  },
  {
    href: '#',
    label: 'Settings',
    icon: Settings
  },
]

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          { navItems.map(({ href, label, icon: Icon }) => (
            <li>
              <Link to={ href }>
                <Icon />
                <span>{ label }</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>    
    </>
  )
}

export { Navigation }