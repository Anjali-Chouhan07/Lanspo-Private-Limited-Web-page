import styles from '../style'

import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const CTA = () => (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
    >
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>Let’s try our service now!</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Everything you need to accept card payments and grow your
                    business anywhere on the planet.
                </p>
            </div>

            {/* Buttons Section */}
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 flex flex-row gap-4`}>
                <button
                    className="px-6 py-3 bg-blue-gradient text-white font-poppins font-medium text-[16px] rounded-[10px] hover:bg-blue-600 transition duration-300" onClick={() => window.location.href = '/about'}
                >
                    Explore More
                </button>
                <button
                    className="px-6 py-3 bg-transparent border border-white text-white font-poppins font-medium text-[16px] rounded-[10px] hover:bg-white hover:text-black transition duration-300" onClick={() => window.location.href = '/contact-us'}
                >
                    Contact Us
                </button>
            </div>
        </section>
    </motion.div>
)

export default CTA
