import { useState, useEffect } from 'react';

import { TimeData, timeService } from 'src/service/time.service';
import Loader from 'src/pages/common/loader';

import { TimeStyled } from './time.styles';
const oneSecond = 1000;

const Time = () => {
  const [timeData, setTime] = useState<TimeData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let intervalId: number | null = null;
    const getTime = async () => {
      try {
        let timestamp = await timeService.getTime();
        setTime(timeService.formateDate(timestamp));

        let minutes = timeService.getMinutes(timestamp);

        intervalId = window.setInterval(() => {
          const currentTimestamp = timestamp + 1000;
          const currentMinutes = timeService.getMinutes(timestamp);

          timestamp = currentTimestamp;

          if (minutes !== currentMinutes) {
            setTime(timeService.formateDate(currentTimestamp));
            minutes = currentMinutes;
          }
        }, oneSecond);
      } catch (e) {
        setError(true);
      }
    };

    getTime();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  if (error) {
    return null;
  }

  return (
    <TimeStyled component="div" fontSize={14} textAlign="right">
      {timeData ? `${timeData.time} ${timeData.period}` : <Loader size={14} borderSize={1} />}
    </TimeStyled>
  );
};

export default Time;
