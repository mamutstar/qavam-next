import React from 'react'
import Link from 'next/link';
import styles from './IntroPage.module.css'

import logo from '../../public/assets/images/logo/whiteLogo.svg'
import logoTypeFa from '../../public/assets/images/logo/whitePersianLogoType.svg';
import logoTypeEn from '../../public/assets/images/logo/whiteEnglishLogoType.svg';
import EnglishFlag from '../../public/assets/england.svg'
import IranFlag from '../../public/assets/iran.svg'
import openTimeIcon from '../../public/assets/images/logo/whiteStopWatch.svg'
import locationIcon from '../../public/assets/images/logo/whiteLocation.svg'

export default function IntroPage() {
  return (
    <div>
      <ul className={styles.topNavBar}>
        <li> <Link href="/">Home</Link></li>
        <li><Link href="#">About us</Link></li>
        <li><Link href="#">Contact us</Link></li>
        <li><Link href="#">Menu</Link></li>
      </ul>
    <div className={styles.introGlassCard}>
      
      
      <div className={styles.qavamLogoContainer}>
        <img className={styles.qavamLogo} src='/assets/images/logo/whiteLogo.svg'/>
        <img className={styles.qavamLogo} src='/assets/images/logo/whitePersianLogoType.svg'/>
        <img className={styles.qavamLogo} src='/assets/images/logo/whiteEnglishLogoType.svg'/>
        

      </div>

      <div className={styles.goToMenuContainer}>
        <div className={styles.goToPersianMenu}>
          <img className={styles.languageIcon} src='/assets/iran.svg'/>
          <Link href="/menu?lang=fa">
          <p>رفتن به منــــــــــو</p>
          </Link>
        </div>
        <div className={styles.goToEnglishMenu}>
          <img className={styles.languageIcon} src='/assets/england.svg'/>
          <Link href="/menu?lang=en">
          <p>go to the menu</p>
          </Link>
        </div>
        

      </div>

      <div className={styles.workInfoContainer}>
        <div><img className={styles.timeLocIcon} src='/assets/images/logo/whiteStopWatch.svg'/>
        <div className={styles.dinnerLunchContainer}>
          <div><p>dinner<br/>11:30 to 16:00</p></div>
          <div><p>lunch<br/>19:30 to 23:00</p></div>
        </div>
        </div>
        <div><a href="geo:28.98669639134926, 50.82755359796483"><img className={styles.timeLocIcon} src='/assets/images/logo/whiteLocation.svg'/></a>
        <div className={styles.adressContainer}>
          <p>Adress<br/>Old City Structure, Bushehr, Bushehr Province, Iran</p>

        </div>
        </div>
      </div>

    </div>
    
    </div>
    
  )
}
