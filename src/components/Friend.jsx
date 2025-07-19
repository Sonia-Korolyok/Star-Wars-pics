const Friend = ({ picture, pos, setSelectedImg }) => {
    let styles = "w-full cursor-pointer transition-transform duration-300 size-img ";

    if (pos === 7) styles += "rounded-bl-2xl ";
    if (pos === 9) styles += "rounded-br-2xl ";

    return (
        <img
            className={styles}
            src={picture}
            alt="Friend"
            onClick={() => setSelectedImg(picture)}
        />
    );
};

export default Friend;
