import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

const Backdrop = (props)=>{
    return <div className={styles.backdrop}></div>
}

const ModalOverlay = (props)=>{
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
}
const Modal = (props) => {
    const portalElements = document.getElementById("overlays")
  return (
    <>
    {ReactDOM.createPortal(<Backdrop/>,portalElements)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElements)}
    </>
  )
}

export default Modal