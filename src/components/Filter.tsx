import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Collapsible from "./Collapsible";

interface Props  {
    description: string;
    image: string;
    year: number;
}

const Filter: React.FC<{data: Props[]}> = ({data}): JSX.Element=> {

    const [aliens, setAliens] = useState(data.filter(el => el.year === 1979));

    const buttons = data.reduce((acc: number[], el: Props) => {
        if (acc.includes(el.year)) return acc;
        return [...acc, el.year];
    }, []);

    const handleFilter = (selector: number): void => {
        setAliens(data.filter((el) => el.year === selector));		
    };

    const listVariants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 },
        }),
        hidden: { opacity: 0, y: 100 },
    };

    return (
        <div >
            {buttons &&
                buttons.map((button: number) => (
                    <Button
                        key={button}
                        text={button}
                        handleFilter={handleFilter}
                    ></Button>
                ))}
            <AnimatePresence>
                <ul style={{marginTop: 10}}>
                    {aliens &&
                        aliens.map((alien, i) => {
                            return (
                                <motion.li
                                    variants={listVariants}
                                    initial="hidden"
                                    whileInView={"visible"}
                                    custom={i}
                                    key={alien.description}
                                >
                                    <figure>
                                        <motion.img
                                            className="image"
                                            src={alien.image}
                                            alt={alien.description}
                                            whileTap={{
                                                scale: 1.3,
                                                outline: "2px solid blue",
                                            }}
                                        />
                                        <Collapsible />
                                        <figcaption>
                                            {alien.description}
                                        </figcaption>
                                    </figure>
                                </motion.li>
                            );
                        })}
                </ul>
            </AnimatePresence>
        </div>
    );
};

export default Filter;