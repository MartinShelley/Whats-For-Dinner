import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.css';
import 'swiper/css/scrollbar';

import { Input } from "../../components/input/input";
import { RecipeCard } from "../../components/recipe-card/recipe-card";

import styles from './recipes.module.css';

function RecipesPage() {
  return (
    <div>
      <Input id='recipeName' className={styles.formGroup} type='text' placeholder='Search for recipes...' />
      <Swiper className={styles.tagSwiper} slidesPerView="auto" spaceBetween={8}>
        <SwiperSlide style={{ width: 'auto' }}>
          <Input id='all-tags' className="recipe-filter" label='All' type='checkbox' name='tag' value='all'/>
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto' }}  >
          <Input id='breakfast' className="recipe-filter" label='Breakfast' type='checkbox' name='tag' value='breakfast'/>
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto' }}>
          <Input id='lunch' className="recipe-filter" label='Lunch' type='checkbox' name='tag' value='lunch'/>
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto' }}>
          <Input id='dinner' className="recipe-filter" label='Dinner' type='checkbox' name='tag' value='dinner'/>
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto' }}>
          <Input id='quick' className="recipe-filter" label='Quick' type='checkbox' name='tag' value='quick'/>
        </SwiperSlide>
        <SwiperSlide style={{ width: 'auto' }}>
          <Input id='healthy' className="recipe-filter" label='Healthy' type='checkbox' name='tag' value='healthy'/>
        </SwiperSlide>
      </Swiper>
      <div className={styles.recipeList}>
         <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
         <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
         <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
         <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
         <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
        </div>
    </div>
  )
}

export { RecipesPage };