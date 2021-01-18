import { axiosClient } from './config.service';

class UserService {
  // Jobs
  static login(obj) {
    const url = `/login`;
    return axiosClient.post(url, { ...obj });
  }
}
export default UserService;
