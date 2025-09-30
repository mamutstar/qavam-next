import React from 'react'
import styles from './MenuCategoryButton.module.css'

export default function MenuCategoryButton() {
  return (
    <div className={styles.menuCategoryContainer}>
          <button>
            <img src='/assets/images/logo/meal.svg'/>
            <p>Persian Food</p>
          </button>
          <button>
             <img src='/assets/images/logo/fish.svg'/>
            <p>Sea Food</p>
          </button>
          <button>
            <img src='/assets/images/logo/hamburger.svg'/>
            <p>Fast Food</p>
          </button>
          <button>
            <img src='/assets/images/logo/hotdog.svg'/>
            <p>Appetizer</p>
          </button>
          <button>
            <img src='/assets/images/logo/cupcake.svg'/>
            <p>Desserts</p>
          </button>
          <button>
            <img src='/assets/images/logo/cola.svg'/>
            <p>Drink</p>
          </button>

    </div>
  )
}
