import styles from './BlurredBoxMob.module.scss';
import Star from '../../assets/star.png'
import Ligtning from '../../assets/lightning.png'
const BlurredBoxMob = () => {

    return (
        <div className={styles.blurredBox}>
            <div className={styles.guideBox}>
                <p className={styles.guideTitle}>Бесплатный гайд</p>

                <div className={styles.icons}>
                    <img src={Star} className={styles.star} alt="Звезда" />
                    <img src={Ligtning} className={styles.ligtning} alt="Молния" />
                </div>
                
                <p>
                    Получите бесплатный гайд по искусственному интеллекту, который
                    поможет улучшить работу графического дизайнера.
                </p>
            </div>
        </div>
    )
}

export default BlurredBoxMob;
