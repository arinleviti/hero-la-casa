import styles from './news-modal.module.css';
import { Modal } from 'react-bootstrap';

import { NewsModalContent } from '../../../Services/newsItems';
import Image from 'next/image';

interface Props {
    onClose: () => void;
    newsModalContent: NewsModalContent;
}
const NewsModal = ({ onClose, newsModalContent }: Props) => {
    return (
        <Modal className={styles.modal} show={true} onHide={onClose}>
            <Modal.Header className={styles.modalTitleWrapper} closeButton>
                <Modal.Title className={styles.modalTitle}>{newsModalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={newsModalContent.imgUrl}
                        alt={newsModalContent.title}
                        width={700}   // actual image or display width
                        height={989}  // actual image or display height
                        className={styles.modalImage}
                        priority
                    />
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default NewsModal;
