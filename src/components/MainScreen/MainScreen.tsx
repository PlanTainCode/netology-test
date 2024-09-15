import { FC, useEffect, useState } from "react";
import styles from './MainScreen.module.scss';
import GirlDesktop from '../../assets/girl.png'
import GirlMobile from '../../assets/girl-mob.png'
import Logo from '../../assets/logo.png'
import Star from '../../assets/star.png'
import Ligtning from '../../assets/lightning.png'
import BlurredBoxMob from "../BlurredBoxMob/BlurredBoxMob";

const MainScreen:FC = () => {
    const [isSmallerThan480, setIsSmallerThan480] = useState<boolean>(window.innerWidth < 480);

    useEffect(() => {
        const handleResize = () => {
        setIsSmallerThan480(window.innerWidth < 480);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className={styles.heroBlock}>
                <div className={styles.heroContainer}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="Логотип" />
                    </div>
                    <button className={styles.menuButton}>
                        {isSmallerThan480 ? (
                            <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M5 8H36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M1 15H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>                        
                        ) : 'Меню'}
                        
                    </button>
                    <div className={styles.heroContent}>
                        <div className={styles.textContent}>
                            <h1>Как использовать нейросети</h1>
                            <p>в графическом дизайне</p>
                        </div>

                        <img className={styles.heroImage} src={isSmallerThan480 ? GirlMobile : GirlDesktop} alt="Девушка" />
                        
                        <div className={styles.blurredBox}>
                            <div className={styles.guideBox}>
                                <p className={styles.guideTitle}>Бесплатный гайд</p>
                                <p>
                                    Получите бесплатный гайд по искусственному интеллекту, который
                                    поможет улучшить работу графического дизайнера.
                                </p>
                                <div className={styles.icons}>
                                    <img src={Star} className={styles.star} alt="Звезда" />
                                    <img src={Ligtning} className={styles.ligtning} alt="Молния" />
                                </div>
                            </div>
                        </div>

                        <button className={styles.guideButton}>Получить гайд</button>
                    </div>
                </div>
            </section>

            {isSmallerThan480 && (
                <BlurredBoxMob />
            )}
        </>
    )
}

export default MainScreen;
