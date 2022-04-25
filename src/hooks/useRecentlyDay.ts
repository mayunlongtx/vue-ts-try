interface Item {
  id: string;
  pId: string;
  text: string;
}
interface Time extends Item {
  children: Item[];
}

interface ConfigType {
  days: number;
  maxHours: number;
  minHours: number;
  maxMinutes: number;
  interval: number;
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
  console.log(defaultConfig, 'defaultConfig');
  // 生成近期日期
  function getDay() {
    let { year, month, day, hour, minute, second } = getNowTime();
    if (whetherApply()) {
      day += 1;
    }
    let dayList: Time[] = [];
    for (let i = 0; i < days; i++) {
      // TODO: 这里缺少了每月最大天数判断 超过当前月最大天数要判断去到下个月 不然会出现天数异常问题
      let nowDay = day + i;
      let { week } = getNowTime(`${year}-${month}-${nowDay} ${hour}:${minute}:${second}`);

      // 生成 children
      let children: Item[] = generateHour(nowDay);
      dayList.push({
        id: `${year}${month}${nowDay}`,
        pId: '0',
        text: calculateDayName(nowDay, week, `${month}-${nowDay}`),
        children: <any>children,
      });
    }
    return dayList;
  }
  // 生成时间
  function generateHour(nowDay: any, time?: any) {
    let { year, month, day, hour } = getNowTime();
    let list: Item[] = [];
    // 当前时间 往后顺延两小时
    // 规则：
    //      1. 如果当前时间大于16点30分，则无预约时间
    //      2. 如果当前时间小于16点30分，则当天的时间往后顺延两小时 最大不能超过 18:00
    hour = nowDay > day ? minHours : hour;
    // 生成当前时间 至 18:00 时间
    for (let i: any = hour; i < maxHours + 1; i++) {
      i = i < 10 ? '0' + i : i;
      list.push({
        id: `${nowDay}${i}00`,
        pId: `${year}${month}${nowDay}`,
        text: `${i}:00`,
      });
    }
    return list;
  }
  // 计算今天、明天、后天
  function calculateDayName(nowDay: number, week: number, value?: any) {
    const { day } = getNowTime();
    let _str = value;
    const difference = day - nowDay;
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
    console.log(week, 'week');
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
    console.log(nowHour, maxHours);
    if (nowHour > maxHours) {
      return true;
    } else if (Number(nowHour) + interval === hour) {
      console.log('我是不是走的这里');
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
    let hour: string | number = date.getHours();
    let minute: string | number = date.getMinutes();
    let second: string | number = date.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
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
  return {
    getDay,
  };
}
