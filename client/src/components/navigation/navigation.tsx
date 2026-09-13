import { Home, Book, Sparkles, Calendar, Settings } from 'lucide-react';

import './navigation.module.css';

const navItems = [
  {
    href: '#',
    label: 'Home',
    icon: Home,
    aria_current: 'page' as const
  },
  {
    href: '#',
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
          { navItems.map(({ href, label, icon: Icon, aria_current }) => (
            <li>
              <a href={ href } aria-current={aria_current}>
                <Icon />
                <span>{ label }</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>    
    </>
  )
}

export { Navigation }