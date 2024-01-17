import { useEffect } from 'react';

export default function App() {
  const style: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    color: 'red',
  };

  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return (
    <div style={style} className="">
      content view
    </div>
  );
}
