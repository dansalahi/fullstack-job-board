import classes from './video.module.css'

const Video: React.FC = () => {
    return (
        <video autoPlay loop muted className={classes.typingVideo}>
            <source src={process.env.PUBLIC_URL + '/assets/video/LaptopBrowsing.mp4'} type="video/mp4" />
        </video >
    );
}

export default Video;