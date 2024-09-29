import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';

const timelineData = [
    { date: 'May 2012', title: 'Event 1', description: 'Description for event 1.', image: 'https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg' },
    { date: 'November 2012', title: 'Event 2', description: 'Description for event 2.', image: 'https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg' },
    { date: 'June 2013', title: 'Event 3', description: 'Description for event 3.', image: 'https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg' },
    // Add more events as needed
];

const About = () => {
    return (
        <div>
            {/* About Section */}
            <div style={styles.about}>
                <Container>
                    <div style={styles.spec}>
                        <h3>About</h3>
                        <div style={styles.serT}>
                            <b></b>
                            <span><i></i></span>
                            <b style={styles.line}></b>
                        </div>
                    </div>
                    <Row>
                        <Col md={4}>
                            <Image src="https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg" alt="About" fluid style={styles.image} />
                        </Col>
                        <Col md={4}>
                            <div style={styles.aboutLeft}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet sem sit amet dolor luctus pellentesque. Pellentesque eleifend tellus at interdum elementum. Nam egestas molestie elit. Vivamus sed accumsan quam, a mollis magna. Nam aliquet eros eget sapien consequat tincidunt at vel nibh. Duis ut turpis mi. Duis nec scelerisque urna, sit amet varius arcu. Aliquam aliquet sapien quis mauris semper suscipit. Maecenas pharetra dapibus posuere. Praesent odio sem.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <Image src="https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg" alt="About 1" fluid style={styles.image} />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Timeline Section */}
            <div style={styles.timeline}>
                <Container>
                    <div style={styles.spec}>
                        <h3>Our Journey</h3>
                        <div style={styles.serT}>
                            <b></b>
                            <span><i></i></span>
                            <b style={styles.line}></b>
                        </div>
                    </div>
                    <Row>
                        {timelineData.map((item, index) => (
                            <Col md={6} key={index} style={styles.timelineItem}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <Image src={item.image} alt={item.title} fluid style={styles.timelineItemImage} />
                                    <div style={styles.timelineItemContent}>
                                        <div style={styles.timelineItemDate}>
                                            <FaCalendarAlt /> {item.date}
                                        </div>
                                        <div style={styles.timelineItemTitle}>{item.title}</div>
                                        <div style={styles.timelineItemDescription}>{item.description}</div>
                                    </div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

const styles = {
    about: {
        padding: '6em 0',
    },
    spec: {
        textAlign: 'center',
        marginBottom: '2em',
    },
    serT: {
        margin: '1em 0',
    },
    line: {
        display: 'block',
        height: '2px',
        backgroundColor: '#029241',
        width: '50%',
        margin: '1em auto',
    },
    image: {
        borderRadius: '8px',
        marginBottom: '1em',
    },
    aboutLeft: {
        fontSize: '1em',
        color: '#999',
        lineHeight: '2em',
        padding: '2em 0',
    },
    timeline: {
        padding: '6em 0',
        background: '#F2F3F3',
    },
    timelineItem: {
        marginBottom: '20px',
    },
    timelineItemImage: {
        borderRadius: '8px',
        marginBottom: '1em',
    },
    timelineItemContent: {
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    },
    timelineItemDate: {
        fontSize: '1.3em',
        color: '#029241',
        marginBottom: '0.5em',
    },
    timelineItemTitle: {
        fontSize: '1.5em',
        color: '#000',
        marginBottom: '0.5em',
    },
    timelineItemDescription: {
        fontSize: '1em',
        color: '#666',
    },
};

export default About;
