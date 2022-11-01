import moment from "moment";

interface praseMoneyOption {
  location?: "vn" | "en";
}

export const praseMoney = (
  money: number | bigint,
  option?: praseMoneyOption
) => {
  const location = option?.location ?? "vn";
  let formatter: Intl.NumberFormat;

  if (location === "vn") {
    formatter = Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  } else {
    formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  }

  return formatter.format(money);
};

export const parseDate = (value: Date | string, option?: praseMoneyOption) => {
  if (!value) {
    return "NaN";
  }
  const location = option?.location ?? "vi-VN";
  return new Date(value).toLocaleDateString(location, {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  });
};

export const praseFullDateTime = (
  value: Date | string,
  option?: { isSorted: boolean }
) => {
  if (!value)
    return {
      date: "NaN",
      time: "NaN",
    };
  if (option?.isSorted) {
    const date = moment(value).format("DD/MM/YYYY");
    const time = moment(value).format("h[h]mm");
    return { date, time };
  }
  const date = moment(value).format("DD [thg]MM, YYYY");
  const time = moment(value).format("hh:mm");
  return { date, time };
};

export const parseName = (value?: Name) => {
  if (!value) return "No name";
  return `${value.firstname} ${value.lastname}`;
};

export const parseId = (value?: string | any): string => {
  if (!value) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  return (value.id ?? value._id).toString();
};
