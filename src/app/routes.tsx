import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Practice } from './pages/Practice';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Contact } from './pages/Contact';
import { Search } from './pages/Search';
import { PartnerDetail } from './pages/PartnerDetail';
import { Privacy } from './pages/Privacy';
import { Imprint } from './pages/Imprint';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'home',
        Component: Home,
      },
      {
        path: 'ueber-uns',
        Component: Practice,
      },
      {
        path: 'projekte',
        Component: Projects,
      },
      {
        path: 'projekte/:id',
        Component: ProjectDetail,
      },
      {
        path: 'projects/:id',
        Component: ProjectDetail,
      },
      {
        path: 'partner/:id',
        Component: PartnerDetail,
      },
      {
        path: 'news',
        Component: News,
      },
      {
        path: 'news/:id',
        Component: NewsDetail,
      },
      {
        path: 'suche',
        Component: Search,
      },
      {
        path: 'kontakt',
        Component: Contact,
      },
      {
        path: 'datenschutz',
        Component: Privacy,
      },
      {
        path: 'impressum',
        Component: Imprint,
      },
    ],
  },
]);