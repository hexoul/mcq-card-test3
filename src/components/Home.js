import { useCallback, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

import "./Home.css";
import Question from "./Question";

const Home = () => {
  const [start, setStart] = useState(false);
  const doStart = useCallback(() => setStart(true), []);

  return start ? (
    <Question />
  ) : (
    <div className="Home">
      <img
        src={`${process.env.PUBLIC_URL}/logo512.png`}
        className="Home-LogoImage"
        alt="logo"
      />
      <div className="Home-Title">당신의 찰떡궁합 운명의 상대는?</div>
      <div className="Home-Subtitle">영화/드라마 캐릭터 남자 편</div>
      <img
        src="https://static.kinolights.com/mbti/202307-fate/male-start.png"
        className="Home-StartImage"
        alt="start"
      />
      <IconButton
        className="Home-StartButton"
        sx={{
          color: "white",
          backgroundColor: "rgb(37, 48, 74)",
          borderRadius: "10px",
          fontSize: "large",
          fontFamily: "GangwonEdu_OTFBoldA",
          boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
        }}
        onClick={doStart}
        disableRipple
      >
        <ChevronRightIcon />
        테스트 시작하기
      </IconButton>
    </div>
  );
};

export default Home;
