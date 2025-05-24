import styles from '@/widgets/faq_filter/ui/faq_filter.module.css';

import type { FaqFilterProps } from '@/widgets/faq_filter/model/faq_filter_props';

export function FaqFilter(
  {
    categories,
    selectedCategory,
    onChangeCategory,
  }: FaqFilterProps
) {
  return (
    <div className={styles.faqFilter}>
      {
        categories.map((category) => (
          <label key={category.categoryID}>
            <input type="radio"
              name="filter"
              checked={selectedCategory === category.categoryID}
              onChange={() => onChangeCategory(category.categoryID)}
            />
            <i>{category.name}</i>
          </label>
        ))
      }
    </div>
  );
}