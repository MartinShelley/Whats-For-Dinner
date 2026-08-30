import styles from './recipe-card.module.css';

import { Clock4 } from 'lucide-react';

function RecipeCard({ name, time, tags, image } : {name: string, time: string, tags: string[], image: string}) {
  return (
  <div className={styles.recipe_card}>
    <div className={styles.img_wrapper}>
      <div className={styles.img_overlay}></div>
      <img 
        className={styles.recipe_image}
        src={image} 
        alt="Recipe Image" 
        />
      <h3 className={styles.recipe_name}>{ name }</h3>
    </div>
    <div className={styles.card_copy}>
      <div className={styles.recipe_time}>
        <span><Clock4 size={15} />{ time } min</span>
      </div>
      <div className={styles.recipe_tags}>
        {tags && tags.map((tag) => (
          <span>{ tag }</span>
        ))}
      </div>
    </div>
  </div>
  )
}

export { RecipeCard };
