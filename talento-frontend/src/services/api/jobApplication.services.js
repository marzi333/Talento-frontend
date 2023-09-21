import api from "./api.services";

const postAndEvaluateFreelancer = (cvUrl) => {
  // console.log(imgUrl);
  api()
    .post(`https://cloudfunction-uggculcaga-ey.a.run.app/get_questions`, {
      job_description:
        "Facilitate business value workshops and use Celonis to identify and qualify opportunities for process enhancement\nDerive improvement measures in core business functions and initiate improvement actions and enterprise-wide change initiatives\nPresent results and realized value to senior management and C-level executives",
      cv_url: cvUrl,
    })
    .then((res) => {
      console.log("RES", res);
      return res;
    })
    .catch((err) => console.log(err.message));
};

export { postAndEvaluateFreelancer };
