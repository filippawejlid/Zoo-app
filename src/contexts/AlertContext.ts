import { createContext } from "react";

interface IAlert {
  alert: boolean;
  newNotis(): void;
  noNewNotis(): void;
}
interface IAlerts {
  notis: IAlert;
  noNotis: IAlert;
}

export const alerts: IAlerts = {
  notis: {
    alert: true,
    newNotis: () => {},
    noNewNotis: () => {},
  },
  noNotis: {
    alert: false,
    newNotis: () => {},
    noNewNotis: () => {},
  },
};

export const AlertContext = createContext(alerts.noNotis);
