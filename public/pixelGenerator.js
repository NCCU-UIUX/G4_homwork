/**
 * 8-bit 像素風格圖像生成器
 * 此腳本用於生成簡單的8bit像素風格圖像作為佔位符
 */

class PixelGenerator {
  constructor() {
    this.colors = [
      '#4c71e6', // 藍色
      '#e64c4c', // 紅色
      '#4ce64c', // 綠色
      '#e6e64c', // 黃色
      '#9e4ce6', // 紫色
      '#e64c9e', // 粉色
      '#4ce6e6', // 青色
      '#ff7733', // 暖橙色
    ];
    
    this.patterns = [
      'landscape',
      'character',
      'item',
      'geometric',
      'random'
    ];
  }
  
  // 生成隨機整數
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 為畫布填充顏色
  fillPixel(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);
  }
  
  // 創建風景模式
  createLandscape(ctx, width, height, pixelSize) {
    const skyColor = this.colors[0]; // 藍色
    const groundColor = this.colors[2]; // 綠色
    const sunColor = this.colors[3]; // 黃色
    
    // 天空
    for (let y = 0; y < height/2; y++) {
      for (let x = 0; x < width; x++) {
        this.fillPixel(ctx, x, y, pixelSize, skyColor);
      }
    }
    
    // 地面
    for (let y = Math.floor(height/2); y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.fillPixel(ctx, x, y, pixelSize, groundColor);
      }
    }
    
    // 太陽
    const sunSize = this.getRandomInt(3, 5);
    const sunX = this.getRandomInt(2, width/3);
    const sunY = this.getRandomInt(2, height/4);
    
    for (let y = 0; y < sunSize; y++) {
      for (let x = 0; x < sunSize; x++) {
        this.fillPixel(ctx, sunX + x, sunY + y, pixelSize, sunColor);
      }
    }
  }
  
  // 創建角色模式
  createCharacter(ctx, width, height, pixelSize) {
    const bgColor = '#292929';
    const skinColor = '#ffc2a3';
    const clothesColor = this.colors[this.getRandomInt(0, this.colors.length - 1)];
    
    // 背景
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.fillPixel(ctx, x, y, pixelSize, bgColor);
      }
    }
    
    // 簡單的像素人物
    // 頭部
    const headSize = this.getRandomInt(4, 6);
    const startX = Math.floor((width - headSize) / 2);
    const startY = Math.floor(height / 4);
    
    for (let y = 0; y < headSize; y++) {
      for (let x = 0; x < headSize; x++) {
        this.fillPixel(ctx, startX + x, startY + y, pixelSize, skinColor);
      }
    }
    
    // 身體
    const bodyWidth = headSize;
    const bodyHeight = headSize * 1.5;
    
    for (let y = 0; y < bodyHeight; y++) {
      for (let x = 0; x < bodyWidth; x++) {
        this.fillPixel(ctx, startX + x, startY + headSize + y, pixelSize, clothesColor);
      }
    }
  }
  
  // 創建物品模式
  createItem(ctx, width, height, pixelSize) {
    const bgColor = '#e6e6e6';
    const itemColor = this.colors[this.getRandomInt(0, this.colors.length - 1)];
    
    // 背景
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.fillPixel(ctx, x, y, pixelSize, bgColor);
      }
    }
    
    // 隨機物品 (寶箱)
    const itemSize = this.getRandomInt(6, 8);
    const startX = Math.floor((width - itemSize) / 2);
    const startY = Math.floor((height - itemSize) / 2);
    
    for (let y = 0; y < itemSize; y++) {
      for (let x = 0; x < itemSize; x++) {
        if (y === 0 || y === itemSize-1 || x === 0 || x === itemSize-1) {
          this.fillPixel(ctx, startX + x, startY + y, pixelSize, '#292929');
        } else {
          this.fillPixel(ctx, startX + x, startY + y, pixelSize, itemColor);
        }
      }
    }
  }
  
  // 創建幾何模式
  createGeometric(ctx, width, height, pixelSize) {
    const bgColor = '#fff5f0';
    
    // 背景
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.fillPixel(ctx, x, y, pixelSize, bgColor);
      }
    }
    
    // 幾何圖形
    const shapes = this.getRandomInt(3, 6);
    
    for (let i = 0; i < shapes; i++) {
      const shapeSize = this.getRandomInt(3, 6);
      const x = this.getRandomInt(0, width - shapeSize);
      const y = this.getRandomInt(0, height - shapeSize);
      const color = this.colors[this.getRandomInt(0, this.colors.length - 1)];
      
      // 隨機形狀
      const shape = this.getRandomInt(0, 2);
      
      if (shape === 0) { // 方形
        for (let sy = 0; sy < shapeSize; sy++) {
          for (let sx = 0; sx < shapeSize; sx++) {
            this.fillPixel(ctx, x + sx, y + sy, pixelSize, color);
          }
        }
      } else if (shape === 1) { // 三角形
        for (let sy = 0; sy < shapeSize; sy++) {
          for (let sx = 0; sx <= sy; sx++) {
            this.fillPixel(ctx, x + sx, y + sy, pixelSize, color);
          }
        }
      } else { // 圓形
        for (let sy = 0; sy < shapeSize; sy++) {
          for (let sx = 0; sx < shapeSize; sx++) {
            const distance = Math.sqrt(Math.pow((sx - shapeSize/2), 2) + Math.pow((sy - shapeSize/2), 2));
            if (distance <= shapeSize/2) {
              this.fillPixel(ctx, x + sx, y + sy, pixelSize, color);
            }
          }
        }
      }
    }
  }
  
  // 創建隨機模式
  createRandom(ctx, width, height, pixelSize) {
    // 隨機填充像素
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (Math.random() > 0.7) {
          const color = this.colors[this.getRandomInt(0, this.colors.length - 1)];
          this.fillPixel(ctx, x, y, pixelSize, color);
        } else {
          this.fillPixel(ctx, x, y, pixelSize, '#e6e6e6');
        }
      }
    }
  }
  
  // 生成圖像
  generate(canvas, pattern = 'random') {
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 計算像素大小
    const pixelSize = Math.max(2, Math.floor(width / 32));
    const gridWidth = Math.floor(width / pixelSize);
    const gridHeight = Math.floor(height / pixelSize);
    
    // 清除畫布
    ctx.clearRect(0, 0, width, height);
    
    // 根據圖案類型生成
    switch(pattern) {
      case 'landscape':
        this.createLandscape(ctx, gridWidth, gridHeight, pixelSize);
        break;
      case 'character':
        this.createCharacter(ctx, gridWidth, gridHeight, pixelSize);
        break;
      case 'item':
        this.createItem(ctx, gridWidth, gridHeight, pixelSize);
        break;
      case 'geometric':
        this.createGeometric(ctx, gridWidth, gridHeight, pixelSize);
        break;
      case 'random':
      default:
        this.createRandom(ctx, gridWidth, gridHeight, pixelSize);
        break;
    }
    
    // 放大像素以保持鋸齒效果
    const imageData = ctx.getImageData(0, 0, width, height);
    ctx.imageSmoothingEnabled = false;
    ctx.putImageData(imageData, 0, 0);
  }
}

// 導出生成器實例
window.pixelGenerator = new PixelGenerator(); 