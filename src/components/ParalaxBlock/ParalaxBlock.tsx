import { FC } from "react";
import styles from './ParalaxBlock.module.scss';
import { Parallax } from "react-parallax";
import Bg from '../../assets/thirdBlock.png'

const ParalaxBlock:FC = () => {
    
    return (
        <Parallax
            bgImage={Bg}
            strength={200}
        >
            <div className={styles.parallaxContainer}>
                <div className={styles.parallaxContent}>
                    <div className={styles.parallaxContentBg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="560" height="534" viewBox="0 0 560 534" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M420 43C420 59.5685 433.431 73 450 73H510C537.614 73 560 95.3858 560 123V504C560 520.569 546.569 534 530 534H30C13.4314 534 0 520.569 0 504V30C0 13.4315 13.4315 0 30 0H408.306C415.284 0 420 8.02217 420 15V15V43Z" fill="#1F1F1F"></path>
                        </svg> 
                    </div>
                    <h2>Использование ИИ позволяет значительно сэкономить ресурсы</h2>
                    
                    <div className={styles.footContent}>
                        <span>01</span>
                        <p>Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или реализацию целого проекта. Для этого дизайнеру нужно разбираться в инструментах и их возможностях.</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );

}

export default ParalaxBlock;
