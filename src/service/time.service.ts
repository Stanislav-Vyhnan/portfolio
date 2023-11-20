/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

enum TimePeriods {
  AM = 'AM',
  PM = 'PM',
}

export interface TimeData {
  time: string;
  period: TimePeriods;
}

type Response = {
  datetime: string;
};

const timeApiUrl = 'http://worldtimeapi.org/api/timezone/Europe/Kyiv';
const middleDayHour = 12;

class TimeService {
  public async getTime(): Promise<number> {
    try {
      const { datetime: dateTime } = (await axios.get(timeApiUrl)).data as Response;
      const timestamp = new Date(dateTime).getTime();
      return timestamp;
    } catch (e: any) {
      return Promise.reject(new Error('Ops... Something went wrong'));
    }
  }

  public formateDate(timestamp: number): TimeData {
    const date = new Date(timestamp);
    const currentHours = date.getHours();

    const minutes = date.getMinutes();
    const hours = currentHours - middleDayHour;

    const zeroMinutes = minutes < 10 ? '0' : '';
    const zeroHours = hours < 10 ? '0' : '';

    const time = `${zeroHours}${hours}:${zeroMinutes}${minutes}`;
    const period = currentHours < middleDayHour ? TimePeriods.AM : TimePeriods.PM;

    return {
      time,
      period,
    };
  }

  public getMinutes(timestamp: number): number {
    return new Date(timestamp).getMinutes();
  }
}

export const timeService = new TimeService();
