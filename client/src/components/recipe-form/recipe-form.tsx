import { XCircle, ImagePlus } from 'lucide-react';
import styles from './recipe-form.module.css';

import { Button } from '../button/button';
import { Input } from '../input/input';

function RecipeForm({ closeForm }: { closeForm: () => void }) {

  return (
    <form className={styles.recipeForm}>
      <div className={styles.header}>
        <Button type="button" className={styles.cancel} onClick={closeForm}>
          <XCircle strokeWidth={2}/>
        </Button>
        <h2>Add Recipe</h2>
        <Button type="button" label="Save" className={styles.save} onClick={() => { /* Add save logic */ }} />
      </div>
      <div className={styles.formWrapper}>
        {/* Image Upload */}
        <div className={styles.imageUpload}>
          <label htmlFor="recipeImage">
            <ImagePlus height={48} width={48} stroke='#99A1AF' />
            <p>Add photo</p>
            <small>Click to upload</small>
          </label>
          <input id="recipeImage" type="file" accept="image/*" hidden />
        </div>
        {/* Recipe Name */}
        <Input id='recipeName' className={styles.formGroup} label='Recipe Name' type='text' />
        {/* Cooking Time */}
        <Input id='cookingTime' className={styles.formGroup} label='Cooking Time' type='number' />
        {/* Difficulty */}
        <fieldset>
          <legend>Difficulty</legend>
          <div className={styles.difficulty}>
            <Input id='easy' label='Easy' type='radio' name='difficulty' value='easy' defaultChecked/>
            <Input id='medium' label='Medium' type='radio' name='difficulty' value='medium'/>
            <Input id='hard' label='Hard' type='radio' name='difficulty' value='hard'/>
          </div>
        </fieldset>
        {/* Tags */}
        <fieldset>
          <legend>Tags</legend>
          <div className={styles.tags}>
            <Input id='breakfast' className={styles.checkboxWrapper} label='Breakfast' type='checkbox' name='tag' value='breakfast'/>
            <Input id='lunch' className={styles.checkboxWrapper} label='Lunch' type='checkbox' name='tag' value='lunch'/>
            <Input id='dinner' className={styles.checkboxWrapper} label='Dinner' type='checkbox' name='tag' value='dinner'/>
            <Input id='quick' className={styles.checkboxWrapper} label='Quick' type='checkbox' name='tag' value='quick'/>
            <Input id='healthy' className={styles.checkboxWrapper} label='Healthy' type='checkbox' name='tag' value='healthy'/>
          </div>
        </fieldset>
        {/* Ingredients */}
        <fieldset className={styles.ingredients}>
          <legend className={styles.ingredientsLabel}>Ingredients</legend>

          <ul className={styles.ingredientsList}>
            <li className={styles.ingredientsItem}>
              <Input
                type="text"
                className="ingredientName"
                placeholder="Ingredient 1"
                aria-label="Ingredient 1"
              />
              <Input
                type="text"
                className="ingredientAmount"
                placeholder="500g"
                aria-label="Ingredient 1 amount"
              />
            </li>
          </ul>
          <Button type="button" label="Add Ingredient" className={styles.ingredients__add} onClick={() => { /* Add ingredient logic */ }} />
            {/* <span className={styles.ingredients__add-icon} aria-hidden="true">+</span>
            Add Ingredient */}
          {/* </Button> */}
        </fieldset>
        {/* Instructions */}
        <fieldset className={styles.instructions}>
          <legend>Instructions</legend>
          <ol className={styles.instructionsList}>
            <li className={styles.instructionsItem}>
              <textarea
                className={styles.instructionsTextarea}
                placeholder="Step 1" />
              </li>
          </ol>
          <Button type="button" label="+ Add Step" className={styles.instructions__add} onClick={() => { /* Add instruction logic */ }} />
        </fieldset>
        {/* Notes */}
        <fieldset className={styles.notes}>
          <legend>Notes</legend>
          <textarea className={styles.notesTextarea} placeholder="Add any additional notes here..." />
        </fieldset>
      </div>
      <Button type="button" label="Save Recipe" className={styles.submitForm} onClick={() => { /* Add submit logic */ }} />
    </form>
  )
}

export { RecipeForm };