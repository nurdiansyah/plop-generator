import type { ApisContext } from "@deboxsoft/module-client";

export type {{ pascalCase moduleName }}ClientConfig = ApisContext & {
  apiUrl: string;
};

export type ObserverSubscription = {
  next: (value: any) => void;
  error?: (e: any) => any;
  complete?: () => void;
};

export type ItemDataOptions = {
  index?: number;
};

export type FindOptions = {
  more?: boolean;
  backward?: boolean;
};
