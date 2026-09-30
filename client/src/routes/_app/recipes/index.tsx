import { createFileRoute } from '@tanstack/react-router';
import { RecipesPage } from '../../../pages/recipes/recipes';

export const Route = createFileRoute('/_app/recipes/')({
  component: RecipesPage,
});