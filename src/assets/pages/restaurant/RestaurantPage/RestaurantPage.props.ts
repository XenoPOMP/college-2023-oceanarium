import { PageProps } from '@components/Page/Page.props';
import { Menu } from '@localization/Localization';

export interface RestaurantPageProps extends Omit<PageProps, 'header'> {
  menu?: Menu;
  noMenu?: true;
}
