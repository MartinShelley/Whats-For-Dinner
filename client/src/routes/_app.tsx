import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Navigation } from '../components/navigation/navigation';
import { Header } from '../components/header/header';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
   return (
    <>
      <Header />
      <div className='page-container'>
        <Outlet />
      </div>
      <Navigation />
    </>
  )
}
