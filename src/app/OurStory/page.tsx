

import styles from './page.module.css';
import { storyBlocks } from '../Services/our-story';


import FootPrint from './Footprint/footprints'
import { StoryBlockComponent } from './StoryBlockComponent/story-block';



export default function StoryPage() {
    return (
        <div className={styles.storyPage}>
            <FootPrint/>
            {storyBlocks.map((block, index) => (
                <div style={{ marginBlock: '8rem' }} key={index}>
                    <StoryBlockComponent key={index} title={block.title} year={block.year} text={block.text} imageUrl={block.imageUrl} reverse={block.reverse} />
                </div>
            ))}
        </div>
    )
}

