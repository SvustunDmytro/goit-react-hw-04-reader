import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ handleClick, value }) => (
  <section className={styles.controls}>
    <button
      disabled={value === 0}
      type="button"
      name="decrement"
      className={styles.button}
      onClick={handleClick}
    >
      Назад
    </button>
    <button
      disabled={value === 11}
      type="button"
      name="increment"
      className={styles.button}
      onClick={handleClick}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Controls;
