import React from 'react';
import {motion} from 'framer-motion';
import { Container } from 'reactstrap';
import './style.scss';

const Header = () => {
    return (
        <motion.header
            initial={{
                scale: 0,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1
            }}
            transition={{ duration: 2}}
            className="top">
            <Container>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{delay: 1, duration: 2}}
                    className="top-heading">
                    <h2>Junior Fullstack web developer</h2>
                </motion.div>
            </Container>
        </motion.header>
    );
}

export default Header;
