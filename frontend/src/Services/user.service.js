import { axiosClient } from './config.service';

class UserService {
  // Jobs
  static login(obj) {
    const url = `/login`;
    return axiosClient.post(url, { ...obj });
  }

  static getProfile(){
    const url = `/api/user/profile`;
    return axiosClient.get(url);
  }

  

}
export default UserService;
