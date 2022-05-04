export interface TimeItem {
  id: string;
  pId: string;
  text: string;
  time?: string;
}
export interface Time extends TimeItem {
  children: TimeItem[];
}

export interface ConfigType {
  days?: number;
  maxHours?: number;
  minHours?: number;
  maxMinutes?: number;
  interval?: number;
}
export function useRecentlyDay(config?: ConfigType) {
  const defaultConfig: ConfigType = Object.assign(
    {
      days: 7,
      maxHours: 19,
      minHours: 8,
      maxMinutes: 30,
      interval: 2,
    },
    config,
  );
  const { days, maxHours, minHours, maxMinutes, interval } = defaultConfig;
  // 生成近期日期
  function getDay() {
    const allDays = days || 7;
    let { year: nowYear, month: nowMonth, day: nowDay, hour, minute, second } = getNowTime();
    if (whetherApply()) {
      nowDay += 1;
    }
    let dayList: Time[] = [];
    // console.log(getDaysOfMonth(year, month));
    const maxDay = getDaysOfMonth(nowYear, nowMonth);
    // 判断是不是超出了今年如果超出了就加一年 月份初始化为1 日期初始化为1
    nowMonth = addZero(Number(nowMonth));
    for (let i = 0; i < allDays; i++) {
      if (nowDay == maxDay) {
        nowMonth = addZero(Number(nowMonth) + 1);
        nowDay = 0;
      }
      // 如果是今天就不进行添加？
      if (!whetherApply() && i === 0) {
      } else {
        nowDay = addZero(Number(nowDay) + 1);
      }

      let { week } = getNowTime(`${nowYear}-${nowMonth}-${nowDay} ${hour}:${minute}:${second}`);

      // 生成 children
      let children: TimeItem[] = generateHour(nowYear, nowDay, nowMonth);
      dayList.push({
        id: `${nowYear}${nowMonth}${nowDay}`,
        pId: '0',
        text: calculateDayName(nowDay, week, `${nowMonth} - ${nowDay}`),
        children: <any>children,
      });
    }
    return dayList;
  }
  // 生成时间
  function generateHour(nowYear: any, nowDay: any, nowMonth: any, time?: any) {
    const nowInterval = interval || 2;
    const nowMaxHours = maxHours || 18;
    let { year, month, day, hour, minute } = getNowTime();
    let list: TimeItem[] = [];
    // 当前时间 往后顺延两小时
    // 规则：
    //      1. 如果当前时间大于16点30分，则无预约时间
    //      2. 如果当前时间小于16点30分，则当天的时间往后顺延两小时 最大不能超过 18:00
    // hour = nowDay > day ? minHours : Number(hour) + nowInterval;
    if (nowYear > year || nowMonth > month || Number(nowDay) > day) {
      hour = minHours;
    } else if (minute >= maxMinutes) {
      hour = Number(hour) + nowInterval + 1;
    } else {
      hour = Number(hour) + nowInterval;
    }

    // 生成当前时间 至 18:00 时间
    for (let i: any = Number(hour); i < nowMaxHours + 1; i++) {
      i = addZero(i);
      list.push({
        id: `${nowDay}${i}00`,
        pId: `${nowYear}${addZero(nowMonth)}${addZero(nowDay)}`,
        text: `${i}:00`,
        // :00
        time: `${nowYear}-${nowMonth}-${nowDay} ${i}:00`,
      });
    }
    return list;
  }
  // 计算今天、明天、后天
  function calculateDayName(nowDay: number, week: number, value?: any) {
    const { day } = getNowTime();
    let _str = value;
    const difference = nowDay - day;
    switch (difference) {
      case 0:
        _str = '今天';
        break;
      case 1:
        _str = '明天';
        break;
      case 2:
        _str = '后天';
        break;
      default:
        _str = value;
        break;
    }
    return `${_str} (${calculateWeekName(week)})`;
  }
  // 计算周几
  function calculateWeekName(week: number) {
    switch (week) {
      case 0:
        return '周日';
      case 1:
        return '周一';
      case 2:
        return '周二';
      case 3:
        return '周三';
      case 4:
        return '周四';
      case 5:
        return '周五';
      case 6:
        return '周六';
      default:
        return '未知';
    }
  }
  // 判断今天是否还可以预约
  function whetherApply(hour: number = 19, minute: number = 30) {
    const { hour: nowHour, minute: nowMinute } = getNowTime();
    if (nowHour > maxHours) {
      return true;
    } else if (Number(nowHour) + interval > maxHours) {
      return true;
    } else if (Number(nowHour) + interval === maxHours) {
      return nowMinute > maxMinutes;
    } else {
      return false;
    }
  }
  // 获取当前时间
  function getNowTime(value?: any) {
    let date = value ? new Date(value) : new Date();
    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    const week: number = date.getDay();
    let day: any = date.getDate();
    let hour: any = date.getHours();
    let minute: string | number = date.getMinutes();
    let second: string | number = date.getSeconds();
    // month = month < 10 ? '0' + month : month;
    // day = day < 10 ? '0' + day : day;
    // hour = hour < 10 ? '0' + hour : hour;
    // minute = minute < 10 ? '0' + minute : minute;
    // second = second < 10 ? '0' + second : second;
    return {
      year,
      month,
      week,
      day,
      hour,
      minute,
      second,
    };
  }
  // 计算字符串是否小于 10
  function addZero(value: any) {
    return value < 10 ? `0${value}` : value;
  }
  /**
   * 获取某个月的总天数
   *
   */
  function getDaysOfMonth(year: any, month: any) {
    var date = new Date(year, month, 0);
    var days = date.getDate();
    return days;
  }
  return {
    getDay,
  };
}
