import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Collapsible = (): JSX.Element => {
    const [isDead, setDead] = useState(true);

    const handleDeadler = () => setDead(!isDead);


    return (
        <motion.div
            style={{
                margin: 0,
                height: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
            animate={{
                rotate: [0, 10, -10, 0], 
                transition: {
                    duration: 1,
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                },
            }}
        >
            <AnimatePresence>
                {isDead && (
                    <svg
                        onClick={handleDeadler}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                    >
                        <motion.path
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ rotate: 360, fill: "red", scale: 0 }}
                            transition={{ duration: 1 }}
                            d="M 25 2 C 17.441406 2 12.085938 4.398438 8.71875 8.3125 C 5.351563 12.226563 4 17.527344 4 23.1875 C 4 28.070313 6.472656 31.570313 9.09375 33.96875 C 10.402344 35.167969 11.753906 36.125 12.875 36.875 C 13.960938 37.601563 14.820313 38.152344 15.125 38.4375 C 16.074219 39.75 16.996094 48 25 48 C 33.011719 48 33.984375 39.722656 34.875 38.5625 C 34.878906 38.558594 34.871094 38.535156 34.875 38.53125 C 35.171875 38.234375 36.042969 37.671875 37.125 36.9375 C 38.242188 36.183594 39.597656 35.230469 40.90625 34.03125 C 43.527344 31.632813 46 28.117188 46 23.1875 C 46 17.527344 44.648438 12.226563 41.28125 8.3125 C 37.914063 4.398438 32.558594 2 25 2 Z M 25 4 C 32.140625 4 36.792969 6.1875 39.75 9.625 C 42.707031 13.0625 44 17.847656 44 23.1875 C 44 27.457031 41.941406 30.382813 39.5625 32.5625 C 38.371094 33.652344 37.09375 34.539063 36 35.28125 C 34.90625 36.023438 34.007813 36.554688 33.375 37.21875 C 33.351563 37.238281 33.332031 37.257813 33.3125 37.28125 C 31.003906 40.167969 31.761719 46 25 46 C 18.238281 46 18.933594 40.136719 16.6875 37.1875 C 16.660156 37.152344 16.628906 37.121094 16.59375 37.09375 C 15.96875 36.46875 15.09375 35.953125 14 35.21875 C 12.90625 34.484375 11.628906 33.589844 10.4375 32.5 C 8.058594 30.320313 6 27.402344 6 23.1875 C 6 17.847656 7.292969 13.0625 10.25 9.625 C 13.207031 6.1875 17.859375 4 25 4 Z M 13.84375 16.9375 C 13.414063 16.933594 13.023438 16.953125 12.65625 17 C 11.925781 17.089844 11.367188 17.101563 10.78125 17.6875 C 10.195313 18.273438 10.183594 18.800781 10.09375 19.53125 C 10.003906 20.261719 10.003906 21.15625 10.125 22.125 C 10.371094 24.058594 11.148438 26.335938 12.90625 28.09375 C 14.664063 29.851563 16.941406 30.628906 18.875 30.875 C 19.84375 30.996094 20.738281 30.996094 21.46875 30.90625 C 22.199219 30.816406 22.726563 30.804688 23.3125 30.21875 C 23.890625 29.640625 23.910156 29.097656 24 28.375 C 24.089844 27.652344 24.089844 26.773438 23.96875 25.8125 C 23.722656 23.890625 22.964844 21.613281 21.21875 19.8125 C 21.21875 19.800781 21.21875 19.792969 21.21875 19.78125 C 19.460938 18.023438 17.152344 17.277344 15.21875 17.03125 C 14.734375 16.96875 14.273438 16.941406 13.84375 16.9375 Z M 36.25 16.9375 C 35.8125 16.941406 35.359375 16.96875 34.875 17.03125 C 32.941406 17.277344 30.664063 18.023438 28.90625 19.78125 C 27.148438 21.539063 26.371094 23.847656 26.125 25.78125 C 26.003906 26.75 26.003906 27.613281 26.09375 28.34375 C 26.183594 29.074219 26.195313 29.632813 26.78125 30.21875 C 27.367188 30.804688 27.925781 30.816406 28.65625 30.90625 C 29.386719 30.996094 30.25 30.996094 31.21875 30.875 C 33.152344 30.628906 35.460938 29.851563 37.21875 28.09375 C 38.976563 26.335938 39.722656 24.058594 39.96875 22.125 C 40.089844 21.15625 40.089844 20.261719 40 19.53125 C 39.910156 18.800781 39.898438 18.273438 39.3125 17.6875 C 38.726563 17.101563 38.199219 17.089844 37.46875 17 C 37.101563 16.953125 36.6875 16.933594 36.25 16.9375 Z M 13.8125 18.9375 C 14.167969 18.941406 14.566406 18.980469 14.96875 19.03125 C 16.582031 19.234375 18.441406 19.878906 19.78125 21.21875 C 21.121094 22.613281 21.765625 24.46875 21.96875 26.0625 C 22.070313 26.863281 22.066406 27.597656 22 28.125 C 21.96875 28.375 21.890625 28.589844 21.84375 28.71875 C 21.710938 28.769531 21.488281 28.875 21.21875 28.90625 C 20.679688 28.972656 19.933594 28.976563 19.125 28.875 C 17.511719 28.671875 15.652344 28.027344 14.3125 26.6875 C 12.972656 25.347656 12.328125 23.488281 12.125 21.875 C 12.023438 21.066406 12.027344 20.320313 12.09375 19.78125 C 12.125 19.511719 12.230469 19.289063 12.28125 19.15625 C 12.410156 19.109375 12.621094 19.03125 12.875 19 C 13.144531 18.96875 13.457031 18.933594 13.8125 18.9375 Z M 36.28125 18.9375 C 36.636719 18.933594 36.949219 18.96875 37.21875 19 C 37.488281 19.03125 37.710938 19.113281 37.84375 19.15625 C 37.886719 19.289063 37.96875 19.511719 38 19.78125 C 38.066406 20.320313 38.070313 21.066406 37.96875 21.875 C 37.765625 23.488281 37.121094 25.347656 35.78125 26.6875 C 34.441406 28.027344 32.582031 28.671875 30.96875 28.875 C 30.160156 28.976563 29.414063 28.972656 28.875 28.90625 C 28.625 28.875 28.410156 28.804688 28.28125 28.75 C 28.230469 28.625 28.125 28.394531 28.09375 28.125 C 28.027344 27.585938 28.023438 26.839844 28.125 26.03125 C 28.328125 24.417969 28.972656 22.558594 30.3125 21.21875 C 31.652344 19.878906 33.511719 19.234375 35.125 19.03125 C 35.527344 18.980469 35.925781 18.941406 36.28125 18.9375 Z M 24 33 C 24 33 21.8125 36.292969 21.8125 37.09375 C 21.8125 37.992188 22.304688 38 22.90625 38 C 23.40625 38 24 37.992188 24 37.09375 Z M 26 33 L 26 37.09375 C 26 37.992188 26.59375 38 27.09375 38 C 27.695313 38 28.1875 37.992188 28.1875 37.09375 C 28.1875 36.292969 26 33 26 33 Z"
                        />
                    </svg>
                )}
            </AnimatePresence>
            {!isDead && (
                <motion.p
                    style={{
                        color: "red",
                        margin: 0,
                    }}
                    initial={{ scale: 0, height: 0 }}
                    animate={{ scale: 1, height: "auto" }}
                    transition={{ delay: 1, duration: 0.7 }}
                >
                    you are dead
                </motion.p>
            )}
        </motion.div>
    );
};

export default Collapsible;
