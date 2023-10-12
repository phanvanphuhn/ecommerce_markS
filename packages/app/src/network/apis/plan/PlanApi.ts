import {RequestMethod} from './../../request';
import network from 'network/apis';
import API from 'network/request';

class PlanApi {
  getPlan<T>() {
    return API.request<T>(RequestMethod.GET, network.path.checkPhone, {phone});
  }
}
export default new PlanApi();
