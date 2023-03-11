import cn from 'classnames';
import { FC } from 'react';
import styles from './MenuCategoryComponent.module.scss';
import { MenuCategoryComponentProps } from './MenuCategoryComponent.props';
import { MenuPosition } from '@localization/Localization';

const MenuCategoryComponent: FC<MenuCategoryComponentProps> = ({
  category,
}) => {
  const PositionComponent: FC<{ position: MenuPosition }> = ({
    position,
  }): JSX.Element => {
    return (
      <div className={cn(styles.position)}>
        <div className={cn(styles.name)}>{position.name}</div>

        <div className={cn(styles.line)}></div>

        <div>{position.price}</div>
      </div>
    );
  };

  return (
    <section className={cn(styles.category)}>
      <h3>{category.title}</h3>

      {category.positions.map((pos) => (
        <PositionComponent position={pos} />
      ))}
    </section>
  );
};

export default MenuCategoryComponent;
