import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root';
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEvent
} from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRoot from './pages/EventsRoot';
import Events, {loader as eventsLoader} from './pages/Events';
import Error from './pages/Error';
import {action as manipulateEventAction} from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: '/events', 
        element: <EventsRoot />, 
        children: [
          {index: true, element: <Events />, loader: eventsLoader},
          {
            path: ':id', 
            id: 'event-detail',
            loader: eventDetailLoader, 
            children: [
              {
                index: true, 
                element: <EventDetailPage />, 
                action: deleteEvent
              },
              {
                path: 'edit', 
                element: <EditEventPage />, 
                action: manipulateEventAction
              },
            ] 
          },
          {path: 'new', element: <NewEventPage />, action: manipulateEventAction},
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ]
  }
])

function App() {
  return <div><RouterProvider router={router} /></div>;
}

export default App;
