import { useEffect, useState } from 'react';
import Container from './components/Container/Container';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Button from './components/Button/Button.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
const App = () => {
  
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  const start = () => {
    clearInterval(timer);
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  const stop = () => {
    clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button action={start}><span className='fa fa-play' /></Button>
      <Button action={stop}><span className='fa fa-stop' /></Button>
      <Button action={reset}><span className='fa fa-arrows-rotate' /></Button>
    </Container>
  );
};

export default App;
