import { card, apple, google } from '../assets'
import styles, { layout } from '../style'

import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const CardDeal = () => (
    <section className="flex flex-col gap-10">
        {/* Existing Card Section */}
        <div className={`${layout.section}`}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionInfo}
            >
                <h2 className={styles.heading2}>
                Smart Property Deals,<br className="sm:block hidden" /> simplified
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Buy, sell, or list properties with ease through our trusted marketplace. Transparent, reliable, and built for every customer.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img
                    src={apple}
                    alt="app_store"
                    className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
                />
                <img
                    src={google}
                    alt="google_play"
                    className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
                />
            </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionImg}
            >
                <img
                    src="images/House searching-rafiki.svg"
                    alt="billing"
                    className="md:max-w-none max-w-lg w-[80%] h-auto"
                />
            </motion.div>
        </div>

        
        <div className={`${layout.sectionReverse}`}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionImgReverse}
            >
                <img
                    src="/images/Vehicle Sale-rafiki.svg"
                    alt="billing"
                    className="md:max-w-none max-w-lg w-[100%] h-auto relative z-[5]"
                />

                
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionInfo}
            >
                <h2 className={styles.heading2}>
                Powering the Future  <br className="sm:block hidden" />  of Mobility.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Experience innovation on wheels with our eco-friendly two-wheeler EVs, designed for performance, style, and sustainability.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img
                        src={apple}
                        alt="app_store"
                        className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
                    />
                    <img
                        src={google}
                        alt="google_play"
                        className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
                    />
                </div>
            </motion.div>
        </div>

        {/*Card Section */}
        <div className={`${layout.section}`}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionInfo}
            >
                <h2 className={styles.heading2}>
                From Farms to  <br className="sm:block hidden" />  Global Markets
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Delivering quality agri-products through advanced food processing, ensuring freshness, nutrition, and worldwide reach.
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img
                    src={apple}
                    alt="app_store"
                    className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
                />
                <img
                    src={google}
                    alt="google_play"
                    className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
                />
            </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionImg}
            >
                <img
                    src="images/rice field-rafiki.svg"
                    alt="alternative"
                    className="md:max-w-none max-w-lg w-[80%] h-auto"
                />
            </motion.div>
        </div>
    </section>
)

export default CardDeal