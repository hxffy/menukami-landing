import { motion } from 'framer-motion'
import MobileLayout from 'layouts/MobileLayout'

const loadingContainer = {
  width: '6rem',
  height: '6rem',
  display: 'flex',
  justifyContent: 'space-around',
}

const loadingCircle = {
  display: 'block',
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor: '#4299E1',
  borderRadius: '1rem',
}

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
}

export default function FullScreenLoading() {
  return (
    <MobileLayout>
      <div className="flex w-full h-screen justify-center items-center">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
      </div>
    </MobileLayout>
  )
}
