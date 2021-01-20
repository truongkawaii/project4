import { axiosClient } from './config.service';

class RecruitmentService {
  // Jobs
  static listJob() {
    // return fetchData(query);
    let url = `/api/posts/recruitment`;
    return axiosClient.get(url);
  }

  static upPost(obj){
    let url = `/api/posts`;
    return axiosClient.post(url,{...obj})
  }

  static deleteJob(id){
    let url =`/api/posts/${id}`;
    return axiosClient.delete(url);
  }

}
export default RecruitmentService;