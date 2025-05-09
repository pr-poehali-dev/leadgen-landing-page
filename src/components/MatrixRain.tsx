
import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    const width = window.innerWidth;
    const columns = Math.floor(width / 20);
    
    const createColumn = (i: number) => {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${i * 20}px`;
      
      // Generate random text
      const text = Array.from(
        { length: Math.floor(Math.random() * 20) + 10 },
        () => Math.random() > 0.5 ? '1' : '0'
      ).join('');
      
      column.textContent = text;
      
      // Random animation duration and delay
      const duration = Math.random() * 10 + 5; // 5-15s
      const delay = Math.random() * 10;
      
      column.style.animationDuration = `${duration}s`;
      column.style.animationDelay = `${delay}s`;
      
      container.appendChild(column);
    };
    
    for (let i = 0; i < columns; i++) {
      createColumn(i);
    }
    
    // Handle window resize
    const handleResize = () => {
      if (container) {
        container.innerHTML = '';
        const newWidth = window.innerWidth;
        const newColumns = Math.floor(newWidth / 20);
        
        for (let i = 0; i < newColumns; i++) {
          createColumn(i);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="matrix-rain opacity-20" ref={containerRef}></div>;
};

export default MatrixRain;
