
interface VideoTextProps {
  textVideoData: {
    title1: string;
    title2: string;
    title3: string;
    text1: string;
    text2: string;
    text3: string;
  };
}
//
export default function TextForSEO({ textVideoData }: VideoTextProps) {
  return (
    <div style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap'
    }}>
      <h2>{textVideoData.title1}</h2>
      <p>{textVideoData.text1}</p>
      <h2>{textVideoData.title2}</h2>
      <p>{textVideoData.text2}</p>
      <h2>{textVideoData.title3}</h2>
      <p>{textVideoData.text3}</p>
    </div>
  );
}