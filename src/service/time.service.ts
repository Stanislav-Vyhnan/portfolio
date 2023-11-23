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

const timeApiUrl = 'https://worldtimeapi.org/api/timezone/Europe/Kyiv';
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

    const period = currentHours < middleDayHour ? TimePeriods.AM : TimePeriods.PM;

    const minutes = date.getMinutes();
    const hours = period === TimePeriods.AM ? currentHours : currentHours - middleDayHour;

    const zeroMinutes = minutes < 10 ? '0' : '';
    const zeroHours = hours || 12 < 10 ? '0' : ''; // || 12 - if hours = 0, then should be 12. Ex: 12:10 AM or 12:10 PM

    const time = `${zeroHours}${hours || 12}:${zeroMinutes}${minutes}`;

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
