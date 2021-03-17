import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContinentCloseup.module.css';

const Continent = ({ title, isActive, setIsActive }) => {

    // const [isZoomedIn, setIsZoomedIn] = useState(true);

    // const onZoomedInContinentClick = () => {
    //     console.log('Continent was clicked!');
    //     setIsZoomedIn(!isActive);
    // }


    return (
        <div onClick={setIsActive}
            className={isActive ? styles.ContinentCloseupHidden : styles.ContinentCloseup}
        >
            <h1>Continent</h1>
            <p className={styles.Content}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe maxime, dignissimos laudantium maiores alias quae eaque quia rem accusantium hic iure nisi quibusdam vero. Porro similique harum beatae dolorem dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit necessitatibus eaque ullam ea adipisci praesentium cupiditate fugit labore, iusto aliquam sapiente enim ut non commodi quibusdam et ratione perferendis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, obcaecati? Sit magnam harum voluptates possimus illo omnis? Deserunt dignissimos neque in animi facere est quam? Pariatur esse doloremque odio sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae excepturi dolores earum possimus? Quae eum deleniti maiores reprehenderit voluptatum quam, quaerat incidunt natus obcaecati voluptate quisquam aliquam accusantium qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur similique iure, expedita, placeat molestias necessitatibus ipsam praesentium dolorem nam vero saepe, perferendis fugit! Vitae, in sint consectetur molestias similique accusantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ipsam distinctio eveniet cumque asperiores? Tempora modi dolores voluptatibus corporis vitae, reprehenderit nesciunt ratione assumenda id molestias asperiores natus harum saepe! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ratione error molestias doloribus praesentium et quod ex minus, animi blanditiis molestiae, architecto perspiciatis nam amet soluta ab qui veritatis nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae facere commodi corporis tempora sequi perferendis nesciunt soluta facilis cum excepturi. Laudantium dignissimos ad quae veniam error ipsa temporibus mollitia eligendi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, ut corrupti. Ad, architecto. Cupiditate, repudiandae nam sunt enim, modi illum animi debitis officia magni recusandae, nihil provident sapiente facere optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, expedita error sapiente repellendus fugiat quae minus totam libero voluptates aperiam, consectetur obcaecati doloremque assumenda consequuntur delectus incidunt facilis officia aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias provident ullam aliquid doloremque suscipit? Ea accusantium illum a doloremque laboriosam soluta iusto, deserunt reiciendis magni, corrupti consectetur, exercitationem rem voluptatem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores accusantium facere ipsa, doloribus et velit labore libero molestias impedit repellat aspernatur, numquam ratione tenetur sequi! Mollitia voluptate eius magnam consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam voluptatibus quam voluptatum aspernatur doloremque reprehenderit! Tempora provident ut perspiciatis aut maxime error similique fugiat. Repellendus adipisci eveniet perferendis id aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto, numquam provident sed eveniet vero doloribus temporibus expedita blanditiis perspiciatis alias asperiores laudantium quasi distinctio odio ab culpa laboriosam adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus amet ullam laudantium pariatur sed molestias quasi alias asperiores corrupti quaerat, quo dolorum cum, soluta veritatis iste debitis vel ex est.
            </p>
        </div>
    )
};

Continent.propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setIsActive: PropTypes.func.isRequired
};

export default Continent;
