import React from 'react';
import PropTypes from 'prop-types';
import styles from './BioContinentCloseup.module.css';

const BioContinentCloseup = ({ onContinentClick }) => {

    return (
        <div className={styles.BioCoastlineOuterCloseup}>
            <div className={styles.BioCoastlineInnerCloseup}>
                <div className={styles.BioContinentCloseup}>
                    <h1>Bio Closeup</h1>
                    <button onClick={onContinentClick}>Shrink Continent</button>
                    <p className={styles.BioContentCloseup}>
                        Bio words Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit vitae nobis tempora consequatur necessitatibus nihil quas unde nisi! Ad provident vel ea, porro a dignissimos doloremque impedit adipisci rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsam dignissimos facere doloremque possimus saepe aut, aliquid optio labore architecto veniam. Eum facilis, repudiandae aspernatur quae animi unde explicabo est? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quibusdam maiores quidem obcaecati modi. Sunt deserunt placeat, vel, ipsam tenetur iusto est temporibus nulla odio voluptate impedit aspernatur reprehenderit molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores sequi aut quo illo beatae eius nulla sint dolor atque asperiores assumenda architecto, eveniet laborum repellendus perspiciatis. Reprehenderit, fuga exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam omnis porro rerum deleniti ratione dicta veritatis eum. Pariatur alias expedita soluta vitae in? Culpa accusantium tempore quisquam recusandae inventore.
                    </p>
                </div>
            </div>
        </div>
    )
};

BioContinentCloseup.propTypes = {
    onContinentClick: PropTypes.func.isRequired
};

export default BioContinentCloseup;
