import { useRef, useEffect } from 'react';

/**
 * 像素風格圖像組件
 * 
 * @param {Object} props
 * @param {number} props.width - 圖像寬度
 * @param {number} props.height - 圖像高度
 * @param {string} props.pattern - 圖案類型 (landscape, character, item, geometric, random)
 * @param {string} props.className - 額外的CSS類名
 * @param {string} props.alt - 圖像alt屬性
 */
export default function PixelImage({ 
  width = 200, 
  height = 200, 
  pattern = 'random',
  className = '',
  alt = '像素風格圖像'
}) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 設置畫布尺寸
    canvas.width = width;
    canvas.height = height;
    
    // 確保pixelGenerator可用
    if (window.pixelGenerator) {
      window.pixelGenerator.generate(canvas, pattern);
    } else {
      console.error('像素圖像生成器未載入');
    }
  }, [width, height, pattern]);
  
  return (
    <div className={`pixel-image-container ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="pixel-border" 
        aria-label={alt}
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
} 