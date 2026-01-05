import { ServiceModel } from "../service/Service.types";

export interface ServiceSplitRowProps {
  leftService: ServiceModel;
  rightService: ServiceModel;
  reverse?: boolean;
}
