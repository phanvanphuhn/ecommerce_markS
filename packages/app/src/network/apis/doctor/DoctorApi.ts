import {RequestMethod} from './../../request';
import network from 'network/apis';
import API from 'network/request';

class DoctorApi {
  getDoctor<T>() {
    return API.request<T>(RequestMethod.GET, network.path.contactSearch, {phone});
  }
}
export default new DoctorApi();
