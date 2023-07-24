import { useLocation, Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import ReplayIcon from "@mui/icons-material/Replay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { backgroundColor, color } from "./constant";
import "./Result.css";

const utm = "utm_source=kinolights&utm_medium=mbti&utm_campaign=202307_fate_female";
const data = [
  {
    title: "하쿠",
    description: `<b>"겁내지 마. 나는 그대의 편이야."</b>\n\n\n사교적인 당신은 사려 깊고 진실된 연인을 원하는군요!\n<a href="https://kinolights.com/title/12318?${utm}">&lt;센과 치히로의 행방불명&gt;</a> 속 하쿠와 잘 맞을 것으로 보여요.\n\n\n하쿠는 곤경에 빠진 치히로를 도와주는 수수께끼의 인물인데요.\n그는 상대방의 이야기를 늘 따뜻한 시선으로 들어주고, 깊은 관계를 갖죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n서로를 구원하는 치히로와 하쿠의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 욘두\n자기 주장이 너무 강한 인물과의 사랑은 상처만 남길 거예요",
  },
  {
    title: "셜록 홈즈",
    description: `<b>"불가능한 경우를 제외하고 남은 것은 아무리 이상하고 믿기지 않더라도 사실이기 마련이야."</b>\n\n\n독립적인 당신은 재미있고 지적인 연인을 원하는군요!\n<a href="https://kinolights.com/title/80230?${utm}">&lt;셜록 홈즈&gt;</a> 속 셜록 홈즈와 잘 맞을 것으로 보여요.\n\n\n셜록 홈즈는 통찰력과 괴짜적 성격이 매력적인 인물인데요.\n머리가 비상하고, 정말 가까운 인물들에게는 다정한 신사 같은 셜록 홈즈는\n늘 당신에게 재미있는 시선을 제안해줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신을 끊임없이 자극할 셜록 홈즈와의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 테드\n깊은 생각을 사치로 여기는 인물과의 사랑은 매일이 전쟁일 거예요",
  },
  {
    title: "코넬",
    description: `<b>"많은 사람들이 널 사랑하고 널 걱정하고 있어. 너도 그걸 알았으면 좋겠어."</b>\n\n\n에너지 넘치고 열정적인 당신은 배울 점이 많은 연인을 원하는군요!\n<a href="https://kinolights.com/title/84520?${utm}">&lt;노멀 피플&gt;</a> 속 코넬과 잘 맞을 것으로 보여요.\n\n\n차분하고 순한 성격의 코넬은 내면이 복잡하고 생각이 많은 인물이에요.\n하지만 이를 드러내지 않고 상대방을 먼저 배려하고 이야기를 들어주곤 하죠.\n당신의 활동성을 귀여워해주고, 가끔 과하다 싶을 때에는 붙잡아줄 수도 있는 안정감 있는 애인이 되어 줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신이 어떤 모습이던 묵묵히 지켜봐줄 코넬과의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 피터\n당신보다 적극적인 성격의 애인은 당신을 지치게 할 거예요",
  },
  {
    title: "브루스 배너",
    description: `<b>"그러니까 헐크가, 또 다른 내가 나를 살린 거다? 좋네요... 낭만적인 얘기예요. 근데 왜 살렸답디까?"</b>\n\n\n시간 낭비를 싫어하는 당신은 장기적인 관계를 맺을 수 있는 연애를 원하는군요!\n<a href="https://kinolights.com/title/41311?${utm}">&lt;어벤져스&gt;</a> 속 브루스 배너 잘 맞을 것으로 보여요.\n\n\n헐크와는 다른 성격을 지닌 브루스 배너는 사근사근한 말투에 점잖고 지적인 인물이에요.\n      감정을 쉽게 표현하지 않아서 시니컬한 듯 보이지만,\n사랑하는 사람에게는 한없이 헌신적인 로맨티스트랍니다.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신을 헌신적으로 응원해줄 뚱이와의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 로리\n독립적인 당신을 붙들어두고 싶어하는 로리는 당신과 맞지 않을 거예요",
  },
  {
    title: "뉴트",
    description: `<b>"시작을 함께 했다면 끝도 함께 해야지"</b>\n\n\n마음이 열려 있는 당신은 현실적이면서도 감각적인 연애를 원하는군요!\n<a href="https://kinolights.com/title/19459?${utm}">&lt;메이즈 러너&gt;</a> 속 뉴트가 잘 맞을 것으로 보여요.\n\n\n처음 만나는 인물에게도 다정한 뉴트는 동시에 차가울만큼 현실적이기도 한 인물이에요.\n기꺼이 도전하는 것을 두려워하지 않는 뉴트는, 자신만의 신념이 확실하면서도\n사랑하는 사람을 편안하게 해줄 수 있는 매력을 가지고 있죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신의 모험에 기꺼이 함께해줄 지혜로운 뉴트는 분명 당신이 꿈꾸는 이상적인 파트너일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 닉\n당신보다 에너지가 많은 사람과의 연애는 당신을 지치게 할 거예요",
  },
  {
    title: "로리",
    description: `<b>"사랑해, 조"</b>\n\n\n신뢰를 중요하게 여기는 당신은 낭만적인 연애를 원하는군요!\n<a href="https://kinolights.com/title/76158?${utm}">&lt;작은 아씨들&gt;</a> 속 로리가 잘 맞을 것으로 보여요.\n\n\n오랜 동네 친구로 만나게 될 로리는 당신에게 안정적인 기분을 선물할 거예요.\n사랑하는 사람에게 헌신적인 인물인 로리는 당신의 가치를 기꺼이 공유하고\n일상적인 순간에서 로맨틱한 구석을 만들어내죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신의 모든 순간을 기억해줄 로리는 분명 당신이 꿈꾸는 이상적인 파트너일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 브루스 배너\n자기 주관이 뚜렷하고 시니컬한 사람은 당신과 맞지 않을 거예요.",
  },
  {
    title: "다아시",
    description: `<b>"난 있는 그대로의 당신이 정말 좋아요"</b>\n\n\n빠르게 변화하는 당신은 정서적 안정을 제공할 수 있는 사람을 원하는군요!\n<a href="https://kinolights.com/title/5480?${utm}">&lt;브리짓 존스의 일기&gt;</a> 속 다아시가 잘 맞을 것으로 보여요.\n\n\n감정을 절제하는 신사적인 다아시는 무뚝뚝해보이는 첫인상과는 다르게\n애인에게는 한 없이 부드럽고 자상한 성격의 소유자예요.\n우당탕탕 일상의 애인을 늘 도와주고 진정한 사랑을 가르쳐 줄 수 있는 인물이죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n차분하면서 귀여운 유머를 갖춘 마크 다아시는 분명 당신이 꿈꾸는 이상적인 파트너일거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 카제하야 쇼타\n감성적이고 계획적인 인물과의 연애는 당신을 지치게 할 거예요.",
  },
  {
    title: "패트릭 버로나",
    description: `<b>"내 관심은 바로 너야"</b>\n\n\n성실한 당신은 당신을 존중해줄 수 있는 헌신적인 사람을 원하는군요!\n<a href="https://kinolights.com/title/36671?${utm}">&lt;내가 널 사랑할 수 없는 10가지 이유&gt;</a> 속 패트릭이 잘 맞을 것으로 보여요.\n\n\n  거칠어 보이는 첫인상과는 다르게 진중하고 유쾌한 성격의 소유자인 패트릭은\n당신이 속마음을 공유할 수 있는 믿을만한 연인이 되어줄 거예요.\n당신에게 주도권을 주면서도 관계에서 절대 순종적이지만은 않은 모습으로\n상황을 더욱 재미있게 만들 수 있는 매력을 가진 인물이죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당돌한 당신의 부족한 부분을 채워줄 패트릭은 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 닥터 스트레인지\n당신을 통제하려는 연인과의 연애는 당신을 힘들게 할 거예요.",
  },
  {
    title: "카제하야 쇼타",
    description: `<b>"소문따윈 아무래도 상관 없어. 내 눈엔 내 눈 앞에 보이는 너만이 쿠로누마야."</b>\n\n\n섬세하고 다정한 당신은 편안하고 온화한 사람을 원하는군요!\n<a href="https://kinolights.com/title/87918?${utm}">&lt;너에게 닿기를&gt;</a> 속 카제하야 쇼타와 잘 맞을 것으로 보여요.\n\n\n거짓말을 못하는 성격의 카제하야 쇼타는 당신을 좋아하는 마음을 감추지 못하고 금새 들킬 거예요.\n일편단심으로 당신을 바라보는 멍뭉미를 가진 카제하야 쇼타는 당신과 천천히 신뢰 관계를 쌓고\n깊은 이야기를 나눌 수 있는 연인이 되어 줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n여린 당신의 든든한 버팀목이 되어 줄 카제하야 쇼타는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!\n`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 다아시\n감정 표현을 하지 않는 로봇 같은 파트너는 당신에게 상처만 줄 거예요.",
  },
  {
    title: "하울",
    description: `<b>"소피가 있었기 때문에 올 수 있었던 거야!"</b>\n\n\n평화를 추구하는 당신은 편안하고 친구같은 연인을 원하는군요!\n<a href="https://kinolights.com/title/12311?${utm}">&lt;하울의 움직이는 성&gt;</a> 속 하울과 잘 맞을 것으로 보여요.\n\n\n잘생긴 외모의 하울은 완벽해보이는 겉모습과 다르게 어딘가 챙겨주고 싶은 매력을 가지고 있어요.\n하울은 당신의 창의적인 생각들과 통찰력을 존경하고 경청하며,\n일상 속 환상적인 순간들을 선물해주는 솔직하고 귀여운 연인이 되어줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n온화한 당신에게 아낌없이 표현하며 사랑을 줄 하울은 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 패트릭\n호불호가 강하고 무미건조한 연인은 당신에게 상처를 줄 거예요.",
  },
  {
    title: "닥터 스트레인지",
    description: `<b>"다른 모든 세상에서의 당신을 사랑해."</b>\n\n\n논리적인 당신은 대화가 잘 통하고 지적인 연인을 원하는군요!\n<a href="https://kinolights.com/title/6605?${utm}">&lt;닥터 스트레인지&gt;</a> 속 닥터 스트레인지와 잘 맞을 것으로 보여요.\n\n\n괴짜같은 성격의 닥터 스트레인지는 매우 지적이고 독특한 인물이에요.\n일반적인 선입견과 규범에 얽매이지 않고 다양하게 사고할 줄 아는 닥터 스트레인지는\n누구에게나 다정하며 사람들을 사랑하지만, 동시에 어딘가 결여되어있는 모습에 챙겨주고 싶은 매력도 가지고 있죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신의 지적 호기심을 끊임없이 자극할 닥터 스트레인지는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 카제하야 쇼타\n감성적이기만 한 인물은 당신과 재미있는 대화를 나눌 연인으로는 맞지 않을 거예요.",
  },
  {
    title: "닉",
    description: `<b>"네가 상처받는 게 보기 싫었어"</b>\n\n\n조용한 자신감을 가진 당신은 감정을 강요하지 않는 사람을 원하는군요!\n<a href="https://kinolights.com/title/10074?${utm}">&lt;주토피아&gt;</a> 속 닉이 잘 맞을 것으로 보여요.\n\n\n능청스러운 매력의 닉은 똑똑하고 눈치가 빠른 캐릭터예요.\n아무런 편견 없이 당신의 이야기를 들어줄 닉은 비판적인 사고로 당신을 발전시켜주기도 하죠.\n그는 당신의 독립성을 존중해주고 부담스럽지 않지만 재미있는 방법으로 사랑을 표현할 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n쉽게 마음을 열지 않는 당신도 녹여버릴 매력의 닉은 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 뉴트\n감성적이고 의존적인 인물과의 연애는 당신에게 맞지 않을 거예요.",
  },
  {
    title: "세드릭 디고리",
    description: `<b>"모든 흉터와 결함, 단점까지 당신을 사랑해요."</b>\n\n\n섬세하고 당신은 편안하고 온화한 사람을 원하는군요!\n<a href="https://kinolights.com/title/45205?${utm}">&lt;해리포터&gt;</a> 속 세드릭 디고리와 잘 맞을 것으로 보여요.\n\n\n잘생긴 외모만큼이나 완벽한 성격의 소유자인 세드릭 디고리는 당신의 높은 눈에 들 몇 안 되는 캐릭터예요.\n겸손하고 성실한 세드릭 디고리는 지적인 호기심과 감정적 소통 모두 잘 하는 인물이라,\n당신을 소중히 여기는 완벽한 연인이 되어줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n민감한 당신의 정서에 꽃을 피워 줄 세드릭 디고리는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 브루스 배너\n당신과 비슷한 민감도를 가진 인물과는 매일이 살얼음판일 거예요.",
  },
  {
    title: "피터",
    description: `<b>"야쿠르트 먹을래?"</b>\n\n\n신중하고 배려심이 많은 당신은 적극적으로 표현해주는 사람을 원하는군요!\n<a href="https://kinolights.com/title/68339?${utm}">&lt;내가 사랑했던 모든 남자들에게&gt;</a> 속 피터와 잘 맞을 것으로 보여요.\n\n\n학교에서 가장 인기가 많은 피터는 모든 사람들과 잘 어울리는 성격이에요.\n좋아하는 상대에게 마음을 적극적으로 표현하고,\n유쾌하면서도 예의 바른 피터는 조심스러운 당신의 마음을 사로잡고 깊은 관계로 발전시킬 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n조심스러운 당신의 마음을 허물 피터는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 셜록 홈즈\n지적인 사고로 날카롭게 반응하는 상대는 당신에게 무례하다고 느껴질 거예요.",
  },
  {
    title: "앤소니 브리저튼",
    description: `<b>"그댄 내 존재에 퍼지는 독이오. 내 모든 욕구의 대상이지."</b>\n\n\n고양이 같은 당신은 어른스러운 매력의 사람을 원하는군요!\n<a href="https://kinolights.com/title/103814?${utm}">&lt;브리저튼&gt;</a> 속 앤소니 브리저튼과 잘 맞을 것으로 보여요.\n\n\n앤소니 브리저튼은 이성적이지만 사랑에 있어서는 저돌적인 인물이에요.\n책임감이 강한 면모가 있어 안정감을 느끼게 하면서도,\n새롭고 짜릿한 연애로 당신의 모든 감각을 자극해줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n앤소니 브리저튼은 예민한 당신의 취향을 충족시킬 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 코넬\n고민이 많은 스타일의 연인은 당신과 맞지 않을 거예요.",
  },
  {
    title: "토르",
    description: `<b>"마지막 순간은 당신 곁에 있고 싶어"</b>\n\n\n감정 표현이 서툰 당신은 당신과 반대의 매력을 가진 유쾌한 사람을 원하는군요!\n<a href="https://kinolights.com/title/44421?${utm}">&lt;토르&gt;</a> 속 토르가 잘 맞을 것으로 보여요.\n\n\n무뚝뚝해보이는 첫인상과 다르게 재치있는 성격을 가진 토르는 당신의 호기심을 끌기에 충분해요.\n당신의 직설적인 화법을 상처받지 않고 이해해줄 수 있는 당당하고 유쾌한 애인이 되어줄 거예요.\n말보다 행동으로 표현하는 둘의 연애는 시원시원하고 재미있는 관계가 될 것 같네요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n로봇 같은 당신에게 활력을 불어넣어줄 토르는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2:
      "💔 당신과 맞지 않는 캐릭터: 하쿠\n감성적인 고민이 많은 연인과의 연애는 당신을 답답하게 할 거예요.",
  },
];

const buttonStyle = {
  color,
  backgroundColor,
  marginTop: "2rem",
  borderRadius: "10px",
  lineHeight: "1.1rem",
  fontSize: "large",
  fontFamily: "GangwonEdu_OTFBoldA",
  boxShadow: "rgba(255, 255, 255, 0.34) 0px 5px 20px",
  "&:focus": { color, backgroundColor },
  "&:hover": { color, backgroundColor },
};

const emphasisButtonStyle = {
  ...buttonStyle,
  backgroundColor: "rgb(193, 46, 46)",
  "&:focus": { color, backgroundColor: "rgb(193, 46, 46)" },
  "&:hover": { color, backgroundColor: "rgb(193, 46, 46)" },
};

const Result = () => {
  const location = useLocation();
  const id = +location.pathname.split("/")[2];

  return (
    <div className="Result">
      <Box
        className="Result-Box"
        component="span"
        alignItems="center"
        justifyContent="center"
        sx={{
          p: "100px 30px",
          backgroundImage: `url(https://static.kinolights.com/mbti/202307-fate/male-r${id}.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="Result-Card">
          <div className="Result-Title">당신의 운명은...</div>
          <div className="Result-Subtitle">{`${data[id].title}`}</div>
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderBottomWidth: 4,
            }}
          />
          <div
            className="Result-Description"
            dangerouslySetInnerHTML={{ __html: data[id].description }}
          />
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderBottomWidth: 4,
              mt: 4,
              mb: 1,
            }}
          />
          <div
            className="Result-Description"
            dangerouslySetInnerHTML={{ __html: data[id].description2 }}
          />
          <Divider
            variant="middle"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderBottomWidth: 4,
              mt: 4,
              mb: 4,
            }}
          />
          <div>
            이 캐릭터가 진짜 당신의 운명인가요?
            <p />
            👇
          </div>
          <Button
            className="Result-Button"
            component="a"
            href={`https://kinolights.com/community/post/kVV3hYkBlTLepY8dQ8GC?${utm}`} // FIXME
            disableRipple
            disableFocusRipple
            sx={emphasisButtonStyle}
          >
            확인하고 커피 마시기
          </Button>
          <Button
            className="Result-Button"
            component="a"
            href="https://mbti-fate-male.kinolights.com"
            disableRipple
            disableFocusRipple
            sx={emphasisButtonStyle}
          >
            남자 ver 테스트 하기
          </Button>
          <div className="Result-Share">친구에게 공유하기</div>
          <IconButton
            color="inherit"
            component="label"
            sx={{ backgroundColor: "rgba(37, 48, 74, 0.2)" }}
            onClick={() =>
              navigator.clipboard
                .writeText(`https://mbti-fate-female.kinolights.com/result/${id}`)
                .then(() => alert("주소가 복사되었습니다.\n원하는 곳에 붙여넣기 해주세요."))
            }
          >
            <LinkIcon />
          </IconButton>
        </div>
        <Button
          className="Result-Button"
          component={Link}
          to="/"
          disableRipple
          disableFocusRipple
          startIcon={<ReplayIcon />}
          sx={buttonStyle}
        >
          테스트 다시하기
        </Button>
      </Box>
    </div>
  );
};

export default Result;
