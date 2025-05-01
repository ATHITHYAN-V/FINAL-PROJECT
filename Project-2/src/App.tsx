import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeListing from './pages/RecipeListing';
import RecipeDetail from './pages/RecipeDetail';
import ChefListing from './pages/ChefListing';

function App() {
  // Simple route state to simulate routing
  const [route, setRoute] = useState({
    page: 'home',
    params: {}
  });

  // Set up effect for Link component to update route
  React.useEffect(() => {
    const handleLinkClick = (event: CustomEvent<{ to: string }>) => {
      const { to } = event.detail;
      
      if (to === '/') {
        setRoute({ page: 'home', params: {} });
      } else if (to === '/recipes') {
        setRoute({ page: 'recipes', params: {} });
      } else if (to.startsWith('/recipes/')) {
        const id = to.split('/')[2];
        setRoute({ page: 'recipe-detail', params: { id } });
      } else if (to === '/chefs') {
        setRoute({ page: 'chefs', params: {} });
      } else {
        // Handle other routes or 404
        console.log(`Route not implemented: ${to}`);
      }
    };

    // Custom event for Link component navigation
    window.addEventListener('navigate', handleLinkClick as EventListener);
    
    return () => {
      window.removeEventListener('navigate', handleLinkClick as EventListener);
    };
  }, []);

  // Render the appropriate page based on the route
  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <Home />;
      case 'recipes':
        return <RecipeListing />;
      case 'recipe-detail':
        return <RecipeDetail id={route.params.id as string} />;
      case 'chefs':
        return <ChefListing />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;