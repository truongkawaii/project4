import { axiosClient } from './config.service';

class CandidateService {
  // Jobs
  static listJob(page) {
    // return fetchData(query);
    let url = `/recruitment?page=${page}`;
    return axiosClient.get(url);
  }

}
export default CandidateService;