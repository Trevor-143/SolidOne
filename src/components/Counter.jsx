import styles from '../App.module.css';

function Counter(props) {
  return (
    <div class={styles.count} >{props.value}</div>
  )
}

export default Counter;