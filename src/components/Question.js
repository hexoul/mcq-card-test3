import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";

import { backgroundColor, color, cdnPrefix } from "./constant"
import "./Question.css";

const steps = 12;
const data = [
  {
    question: "오늘은 연인과의 데이트 날!",
    firstChoice: "데이트의 정석은 영화관!\n영화관으로 영화를 보러 간다",
    secondChoice: "넷플릭스 앤 칠!\n집에서 편하게 넷플릭스를 켠다",
  },
  {
    question: "우리 무슨 영화 볼까?",
    firstChoice: "실패없는 선택을 위해 리뷰를 꼼꼼히 읽고 고른다",
    secondChoice: "포스터만 보고 내용을 상상해서 고른다",
  },
  {
    question: "아뿔싸! 연인과 보고 싶은 영화가 다르다면?",
    firstChoice: "딱히 보고 싶진 않지만,\n연인이 보고 싶어 하니 같이 본다",
    secondChoice: "왜 그 영화가 보고 싶어?\n이유를 다 듣고 영화를 선택한다",
  },
  {
    question:
      "고르고 고른 영화의 러닝타임이 너무 길다!\n다음 스케줄이 있는데 이걸 어쩐담...",
    firstChoice: "다음 계획을 위해\n러닝타임이 짧은 영화를 다시 고른다",
    secondChoice: "재미있어 보이니 그냥 본다",
  },
  {
    question:
      "영화가 생각보다 더 재밌었다!\n어랏, 그런데 연인은 재미없었다고 하네?",
    firstChoice: "그럼 넌 어떤 영화가 보고 싶은데?\n다음엔 네가 골라",
    secondChoice: "내가 열심히 고른건데 재미없다니...\n뚁땽해",
  },
  {
    question: "영화를 다 본 연인과 나, 꽤나 출출한데...",
    firstChoice: "일단 밖으로 나가서\n맛있어 보이는 식당을 찾아본다",
    secondChoice: "초록창에 맛집을 검색한다",
  },
  {
    question: "저녁을 먹으러 가는 길,\n우연히 친한 친구 커플을 만났다!",
    firstChoice: "오, 안녕. 다음에 또 봐! 제 갈 길 간다",
    secondChoice: "우리 저녁 먹으러 가는데 같이 갈래?",
  },
  {
    question: "식당에 들어와 메뉴를 고르는데\n처음 들어보는 음식을 찾았다!",
    firstChoice:
      "오랜만에 데이트인데 실패하기 싫어!\n이미 먹어본, 익숙한 음식을 주문한다",
    secondChoice: "이름이 맛있어 보이는데?\n처음 들어보는 음식을 주문한다",
  },
  {
    question:
      "주문을 하기 위해 점원을 부르는데\n점원이 내 목소리를 듣지 못한다!",
    firstChoice: "다시 한 번 더 크게 부른다!",
    secondChoice: "바쁜가? 가까이 올 때까지 기다린다",
  },
  {
    question:
      "음식이 나오지도 않았는데,\n갑자기 점원이 서비스로 음료수를 가져다준다!",
    firstChoice: "사장님 생일인가?\n아니면 내가 마음에 드나? 이유를 궁금해한다",
    secondChoice: "오, 개이득! 감사히 받는다",
  },
  {
    question: "식사를 하는 중에 연인이 최근에 힘들었던 일을 이야기한다",
    firstChoice: "연인을 이해하기 위해\n당시의 상황에 대해 계속 질문한다",
    secondChoice: "연인이 힘들면 나도 마음이 아파ㅠ\n바로 위로한다",
  },
  {
    question:
      "오늘 계획했던 데이트가 모두 끝났다!\n그런데 애인이 갑자기 코노에 가자고 하는데...",
    firstChoice: "헐 너무 좋은데? 나도 사실 가고 싶었어!",
    secondChoice: "해야할 집안일이 있기 때문에\n각자 집으로 돌아간다",
  },
];

const stepperStyle = {
  "& .MuiMobileStepper-progress": {
    backgroundColor: "rgba(230, 230, 230, 1)",
    borderRadius: "10px",
    width: "100vmin",
    height: "20px",
  },
  "& span.MuiLinearProgress-bar": { backgroundColor },
};

const choiceButtonStyle = {
  color,
  backgroundColor,
  marginTop: "9vmin",
  borderRadius: "10px",
  lineHeight: "1.1rem",
  fontFamily: "GangwonEdu_OTFBoldA",
  boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
  "&:focus": { color, backgroundColor },
  "&:hover": { color, backgroundColor },
};

const Question = () => {
  const navigate = useNavigate();

  const [mbtiCount, setMbtiCount] = useState({
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    f: 0,
    t: 0,
    j: 0,
    p: 0,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [done, setDone] = useState(false);

  const postprocess = useCallback(() => {
    if (done) {
      return;
    } else if (activeStep < steps - 1) {
      setActiveStep(activeStep + 1);
      setMbtiCount(mbtiCount);
      return;
    }

    setDone(true);

    let e, i, s, n, f, t, j, p;
    if (mbtiCount.e > mbtiCount.i) e = true;
    else i = true;

    if (mbtiCount.s > mbtiCount.n) s = true;
    else n = true;

    if (mbtiCount.f > mbtiCount.t) f = true;
    else t = true;

    if (mbtiCount.j > mbtiCount.p) j = true;
    else p = true;

    if (e && n && f && j) navigate("/result/0");
    else if (e && n && t && p) navigate("/result/1");
    else if (e && n && f && p) navigate("/result/2");
    else if (e && n && t && j) navigate("/result/3");
    else if (e && s && f && p) navigate("/result/4");
    else if (e && s && f && j) navigate("/result/5");
    else if (e && s && t && p) navigate("/result/6");
    else if (e && s && t && j) navigate("/result/7");
    else if (i && n && f && p) navigate("/result/8");
    else if (i && n && f && j) navigate("/result/9");
    else if (i && n && t && p) navigate("/result/10");
    else if (i && n && t && j) navigate("/result/11");
    else if (i && s && f && p) navigate("/result/12");
    else if (i && s && f && j) navigate("/result/13");
    else if (i && s && t && p) navigate("/result/14");
    else if (i && s && t && j) navigate("/result/15");
  }, [activeStep, mbtiCount, done, navigate]);

  const firstChoiceHandler = useCallback(() => {
    if (activeStep >= steps || done) return;

    switch (activeStep) {
      case 0:
        mbtiCount.e++;
        break;
      case 1:
        mbtiCount.s++;
        break;
      case 2:
        mbtiCount.f++;
        break;
      case 3:
        mbtiCount.j++;
        break;
      case 4:
        mbtiCount.t++;
        break;
      case 5:
        mbtiCount.p++;
        break;
      case 6:
        mbtiCount.i++;
        break;
      case 7:
        mbtiCount.s++;
        break;
      case 8:
        mbtiCount.e++;
        break;
      case 9:
        mbtiCount.n++;
        break;
      case 10:
        mbtiCount.t++;
        break;
      case 11:
        mbtiCount.p++;
        break;
      default:
        break;
    }

    postprocess();
  }, [activeStep, mbtiCount, done, postprocess]);

  const secondChoiceHandler = useCallback(() => {
    if (activeStep >= steps || done) return;

    switch (activeStep) {
      case 0:
        mbtiCount.i++;
        break;
      case 1:
        mbtiCount.n++;
        break;
      case 2:
        mbtiCount.t++;
        break;
      case 3:
        mbtiCount.p++;
        break;
      case 4:
        mbtiCount.f++;
        break;
      case 5:
        mbtiCount.j++;
        break;
      case 6:
        mbtiCount.e++;
        break;
      case 7:
        mbtiCount.n++;
        break;
      case 8:
        mbtiCount.i++;
        break;
      case 9:
        mbtiCount.s++;
        break;
      case 10:
        mbtiCount.f++;
        break;
      case 11:
        mbtiCount.j++;
        break;
      default:
        break;
    }

    postprocess();
  }, [activeStep, mbtiCount, done, postprocess]);

  return (
    <div className="Question">
      <div className="Question-StepLabel">{`${activeStep + 1}/${steps}`}</div>
      <MobileStepper
        className="Question-Stepper"
        variant="progress"
        steps={steps}
        position="static"
        activeStep={activeStep}
        sx={stepperStyle}
      />
      <img
        src={`${cdnPrefix}/q${activeStep + 1}.png`}
        className="Question-Image"
        alt="start"
      />
      <div className="Question-Number">Q{activeStep + 1}.</div>
      <div className="Question-Label">{data[activeStep].question}</div>
      <Button
        className="Question-Choice"
        disableRipple
        disableFocusRipple
        sx={choiceButtonStyle}
        onClick={firstChoiceHandler}
      >
        {data[activeStep].firstChoice}
      </Button>
      <Button
        className="Question-Choice"
        disableRipple
        disableFocusRipple
        sx={choiceButtonStyle}
        onClick={secondChoiceHandler}
      >
        {data[activeStep].secondChoice}
      </Button>
    </div>
  );
};

export default Question;
