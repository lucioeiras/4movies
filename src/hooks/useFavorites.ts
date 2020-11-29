import { useContext } from 'react';

import { FavoritesContext, FavoritesContextData } from '../contexts/Favorites';

export default function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within an FavoritesProvider');
  }

  return context;
}
