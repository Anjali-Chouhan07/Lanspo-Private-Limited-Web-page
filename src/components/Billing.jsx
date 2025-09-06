import { apple,google, card } from '../assets'
import styles, { layout } from '../style'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionImgReverse}
        >
            <img
                src={card}
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
            Smarter Finance, <br className="sm:block hidden" />  Stronger Growth.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            From loans to savings, MG Nidhi Bank supports small businesses and individuals with secure, people-first financial solutions.
            </p>

            
        </motion.div>
    </section>
)

export default Billing
