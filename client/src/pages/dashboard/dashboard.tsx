import { Hero } from '../../components/hero/hero';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { RecipeForm } from '../../components/recipe-form/recipe-form';
import styles from './dashboard.module.css';

import { useState } from 'react';
import { ChevronRight, Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.css';
import 'swiper/css/scrollbar';

export default function Dashboard() {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Hero />
      <div className={styles.recipeCarousel}>
        <div className={styles.recipeCarouselHeader}>
          <h3>Your Recipes</h3>
          <a href="#">See All <ChevronRight /></a>
        </div>
        <Swiper spaceBetween={10} slidesPerView={1.5}>
          <SwiperSlide>
            <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
          </SwiperSlide>
          <SwiperSlide>
            <RecipeCard name='Omelette' time='15-30' tags={['Dinner']} image='/assets/1725382769039-image-omelette.jpeg' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.menuPlan}>
        <div className={styles.menuPlanHeader}>
          <h3>This Week's Menu</h3>
          <a href='#'>View Full Plan</a>
        </div>

        <div className={styles.planDetails}>
          <Swiper spaceBetween={10} slidesPerView={5.5} style={{ paddingRight:'10px' }}>
            <SwiperSlide>
              <div className={styles.planDay}>
                <p>Mon</p>
                <div className={styles.active}>
                  Omlette
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.planDay} ${styles.emptyDay}`}>
                <p>Tues</p>
                <div>
                  <Plus />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.planDay}>
                <p>Weds</p>
                <div className={styles.active}>
                  Omlette
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.planDay}>
                <p>Thurs</p>
                <div className={styles.active}>
                  Omlette
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.planDay}>
                <p>Fri</p>
                <div className={styles.active}>
                  Omlette
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.planDay}>
                <p>Sat</p>
                <div className={styles.active}>
                  Omlette
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.planDay}>
                <p>Sun</p>
                <div className={styles.active}>
                  Omlette
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <button className={styles.addRecipe} onClick={toggleForm}>
        <Plus />
      </button>

      {showForm && <RecipeForm closeForm={toggleForm} />}
    </>
  )
}