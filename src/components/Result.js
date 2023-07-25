import { useLocation, Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import ReplayIcon from "@mui/icons-material/Replay";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import { backgroundColor, color, cdnPrefix } from "./constant";
import "./Result.css";

const utm =
  "utm_source=kinolights&utm_medium=mbti&utm_campaign=202307_fate_female";
const data = [
  {
    title: "셀린",
    description: `<b>"우리가 함께한 시간은 우리 거야. 우리가 만든...\n그건 내가 네 꿈에 있고, 네가 내 꿈에 있는 거랑 같아."</b>\n\n\n사교적인 당신은 사려 깊고 진실된 연인을 원하는군요!\n<a href="https://kinolights.com/title/6694?${utm}">&lt;비포 선라이즈&gt;</a> 속 셀린과 잘 맞을 것으로 보여요.\n\n\n셀린은 우연히 기차에서 만난 제시를 따라 비엔나의 거리를 걷는 낭만적인 연인인데요.\n그녀는 순간적인 끌림에 자신을 내던질만큼 용기있으면서도,\n사랑, 죽음, 인간관계 등 삶을 철학적으로 탐구하며 연인과 깊은 대화를 나눌 줄 아는 인물이에요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n특별한 대화를 나누는 제시와 셀린 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>헤르미온느 그레인저</b>",
    description3: "자기 주장이 너무 강한 인물과의 사랑은 상처만 남을 거예요.",
    imgIdx: 14,
  },
  {
    title: "웬즈데이 아담스",
    description: `<b>"울어도 소용없어서 다신 안 울기로 했어"</b>\n\n\n독립적인 당신은 재미있고 지적인 연인을 원하는군요!\n<a href="https://kinolights.com/title/105956?${utm}">&lt;웬즈데이&gt;</a> 속 웬즈데이 아담스와 잘 맞을 것으로 보여요.\n\n\n웬즈데이 아담스는 엉뚱한 귀여움을 가진 아날로그 파의 인물인데요.\n머리가 비상하고, 정말 가까운 인물들에게는 속마음을 드러내는 웬즈데이 아담스는\n늘 당신에게 재미있는 시선을 제안해줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신을 끊임없이 자극할 웬즈데이 아담스의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>바넬로피</b>",
    description3:
      "생각보다 행동이 먼저인 인물과의 사랑은 매일이 전쟁일 거예요.",
    imgIdx: 15,
  },
  {
    title: "엘사",
    description: `<b>"약속해. 우리는 함께 하겠다고 말이야."</b>\n\n\n에너지 넘치고 열정적인 당신은 배울 점이 많은 연인을 원하는군요!\n<a href="https://kinolights.com/title/12183?${utm}">&lt;겨울 왕국&gt;</a> 속 엘사와 잘 맞을 것으로 보여요.\n\n\n차분하고 어른스러운 모습의 엘사는 평화를 추구하는 인물이에요.\n그녀는 내면에 복잡한 고민이 많아서 당신의 발랄한 성격은 그녀를 행복하게 만들어주고,\n그녀의 온화한 성격은 당신을 돌봐주며 둘은 서로에게 안정감있는 연인이 되어줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신이 어떤 모습이던 묵묵히 지켜봐줄 코넬과의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>소피</b>",
    description3: "당신보다 적극적인 성격의 애인은 당신을 지치게 할 거예요.",
    imgIdx: 13,
  },
  {
    title: "MJ",
    description: `<b>"인정해, 호랑아. 넌 지금 대박난 거라는걸"</b>\n\n\n시간 낭비를 싫어하는 당신은 장기적인 관계를 맺을 수 있는 연애를 원하는군요!\n<a href="https://kinolights.com/title/1731?${utm}">&lt;스파이더 맨&gt;</a> 속 MJ가 잘 맞을 것으로 보여요.\n\n\nMJ는 지적이고 자신감이 넘치며, 삶에 정면으로 맞서는 인물인데요.\n사랑 표현에는 서툴지만 당돌함이 매력적인 MJ는 당신이 기댈만한 사람이 되어주고,\n늘 진실된 모습으로 당신을 지지할 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신을 헌신적으로 응원해줄 MJ와의 관계는 분명 당신이 꿈꾸는 이상적인 연애일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>벨라 스완</b>",
    description3:
      "감정 기복이 심하고 쉽게 스트레스를 받는 벨라와 당신은 맞지 않을 거예요.",
    imgIdx: 5,
  },
  {
    title: "로리 길모어",
    description: `<b>"네가 뛰면, 나도 함께 뛸게!"</b>\n\n\n마음이 열려 있는 당신은 현실적이면서도 감각적인 연애를 원하는군요!\n<a href="https://kinolights.com/title/83952?${utm}">&lt;길모어 걸스&gt;</a> 속 로리 길모어와 잘 맞을 것으로 보여요.\n\n\n로리 길모어는 똑똑하고 신념있는 인물로, 늘 지혜로운 모습을 보여요.\n연인 사이에 갈등이 생기더라도 차분하고 다정한 대화로 해결해낼 수 있는 로리는\n사랑하는 사람을 편안하게 해줄 수 있는 매력을 가지고 있죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신의 모험에 기꺼이 함께해줄 지혜로운 로리는 분명 당신이 꿈꾸는 이상적인 파트너일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>썸머</b>",
    description3:
      "당신보다 에너지가 많은 사람과의 연애는 당신을 지치게 할 거예요.",
    imgIdx: 11,
  },
  {
    title: "벨라 스완",
    description: `<b>"나는 돌이킬 수 없이 무조건적으로 그를 사랑하고 있었다"</b>\n\n\n신뢰를 중요하게 여기는 당신은 낭만적인 연애를 원하는군요!\n<a href="https://kinolights.com/title/40180?${utm}">&lt;트와일라잇&gt;</a> 속 벨라 스완이 잘 맞을 것으로 보여요.\n\n\n어른스러운 성격의 벨라는 사려깊게 당신의 마음을 파악해줄 인물이에요.\n냉소적인 모습을 보이기도 하지만, 사랑 앞에서 만큼은 누구보다 낭만적인 인물이기에\n무슨 일이 있어도 당신과의 관계를 가장 중요시 여기며 당신을 특별하게 만들어 줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신의 모든 모습을 사랑해줄 벨라는 분명 당신이 꿈꾸는 이상적인 파트너일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>MJ</b>",
    description3:
      "감정을 쉽게 표현하지 않고 시니컬한 사람은 당신과 맞지 않을 거예요.",
    imgIdx: 3,
  },
  {
    title: "블랙 위도우",
    description: `<b>"어른답게 대화 좀 할까?"</b>\n\n\n빠르게 변화하는 당신은 정서적 안정을 제공할 수 있는 사람을 원하는군요!\n<a href="https://kinolights.com/title/76398?${utm}">&lt;블랙 위도우&gt;</a> 속 블랙 위도우가 잘 맞을 것으로 보여요.\n\n\n가정적인 성격의 블랙 위도우는 무뚝뚝해보이는 첫인상과는 다르게\n애인에게는 한 없이 부드럽고 자상한 성격의 소유자예요.\n우당탕탕 일상의 애인을 늘 도와주고 진정한 사랑을 가르쳐 줄 수 있는 인물이죠.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n차분하면서 재치있는 모습을 갖춘 블랙 위도우는 분명 당신이 꿈꾸는 이상적인 파트너일거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>조</b>",
    description3:
      "감성적이고 계획적인 인물과의 연애는 당신을 지치게 할 거예요.",
    imgIdx: 9,
  },
  {
    title: "메이브",
    description: `<b>"우린 다 불순한 행동을 하지만, 그렇다고 악인은 아니예요."</b>\n\n\n성실한 당신은 당신을 존중해줄 수 있는 헌신적인 사람을 원하는군요!\n<a href="https://kinolights.com/title/79903?${utm}">&lt;오티스의 비밀 상담소&gt;</a> 속 메이브가 잘 맞을 것으로 보여요.\n\n\n짙은 화장을 한 메이브는 반항적인 겉모습과는 다르게\n당신의 속마음을 이끌어낼 수 있는 믿을만한 애인이 되어줄 거예요.\n자신의 오빠를 위해 대신 퇴학을 당하기도 하고, 오티스가 자신감을 가질 수 있도록 옆에 있어주는 등\n사랑하는 사람들에게는 헌신적인 모습을 보여줘요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당돌한 당신의 부족한 부분을 채워줄 메이브는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>블레어</b>",
    description3: "당신을 통제하려는 연인과의 연애는 당신을 힘들게 할 거예요.",
    imgIdx: 10,
  },
  {
    title: "주디 레이번 홉스",
    description: `<b>"닉, 넌 그보다 훨씬 더한 존재야."</b>\n\n\n섬세하고 다정한 당신은 편안하고 온화한 사람을 원하는군요!\n<a href="https://kinolights.com/title/10074?${utm}">&lt;주토피아&gt;</a> 속 주디 홉스와 잘 맞을 것으로 보여요.\n\n\n낙관적이고 밝은 성격의 주디는 주변 사람들을 행복하게 만드는 매력을 가지고 있어요.\n상처받은 당신을 보듬어줄 수 있는 다정한 마음을 가진 한편,\n마음 먹은 것은 끝까지 해내는 의지까지 있어서 당신에게 멋진 모습을 보여주기도 할 거예요!\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n여린 당신의 든든한 버팀목이 되어 줄 주디는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>블랙 위도우</b>",
    description3:
      "감정 표현을 하지 않는 로봇 같은 파트너는 당신에게 상처만 줄 거예요.",
    imgIdx: 6,
  },
  {
    title: "조",
    description: `<b>"모든 흉터와 결함, 단점까지 당신을 사랑해요."</b>\n\n\n평화를 추구하는 당신은 편안하고 친구같은 연인을 원하는군요!\n<a href="https://kinolights.com/title/76158?${utm}">&lt;작은 아씨들&gt;</a> 속 조와 잘 맞을 것으로 보여요.\n\n\n조는 소박하고 솔직하며 엉뚱한 매력을 가지고 있어요.\n털털한 성격이지만 사실 누구보다 여린 성격이라 배려심이 많은 당신과 비슷한 온도의 인물이에요.\n재치가 풍부한 그녀는 당신의 안정적인 일상에 웃음을 한 스푼 더할 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n온화한 당신에게 비타민이 되어 줄 조는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>메이브</b>",
    description3:
      "호불호가 강하고 무미건조한 연인은 당신에게 상처를 줄 거예요.",
    imgIdx: 7,
  },
  {
    title: "블레어",
    description: `<b>"이 구역의 미친년은 나야."</b>\n\n\n논리적인 당신은 대화가 대화가 잘 통하고 지적인 연인을 원하는군요!\n<a href="https://kinolights.com/title/80352?${utm}">&lt;가십걸&gt;</a> 속 블레어와 잘 맞을 것으로 보여요.\n\n\n겉으로 보면 날카로운 성격의 블레어는 매우 지적이고 독특한 인물이에요.\n시사 상식이나 이슈에 굉장히 밝고 공부를 열심히 하는 블레어는 저돌적인 동시에\n스스로를 돌아볼 줄 아는 속 깊은 인물이라 엄청난 매력으로 당신을 혼미하게 만들 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n당신의 호기심을 끊임없이 자극할 블레어는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>주디 레이번 홉스</b>",
    description3:
      "감성적이기만 한 인물은 당신과 재미있는 대화를 나눌 연인으로는 맞지 않을 거예요.",
    imgIdx: 8,
  },
  {
    title: "썸머",
    description: `<b>"전 제 자신으로 존재하고 싶어요"</b>\n\n\n조용한 자신감을 가진 당신은 감정을 강요하지 않는 사람을 원하는군요!\n<a href="https://kinolights.com/title/7550?${utm}">&lt500일의 썸머&gt;</a> 속 썸머가 잘 맞을 것으로 보여요.\n\n\n썸머는 똑똑하고 당당한 매력을 가진 캐릭터예요.\n독립적인 당신과 비슷하게 본인의 삶을 중요하게 생각하는 썸머에게서 당신은 큰 매력을 느낄 거예요.\n그녀는 다양한 종류의 대화에서 자신의 생각을 분명히 얘기하고, 당신의 생각도 확장시켜줄 수 있는 애인일 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n쉽게 마음을 열지 않는 당신도 녹여버릴 매력의 썸머는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>로리 길모어</b>",
    description3:
      "감성적이고 의존적인 인물과의 연애는 당신에게 맞지 않을 거예요.",
    imgIdx: 4,
  },
  {
    title: "다프네 브리저튼",
    description: `<b>"모든 흉터와 결함, 단점까지 당신을 사랑해요."</b>\n\n\n섬세한 당신은 편안하고 온화한 사람을 원하는군요!\n<a href="https://kinolights.com/title/87696?${utm}">&lt;브리저튼&gt;</a> 속 다프네 브리저튼이 잘 맞을 것으로 보여요.\n\n\n다프네 브리저튼은 소신있고 판단력이 확실하면서 다정한 성격을 가진 인물이에요.\n지혜로운 그녀는 당신이 예민하게 구는 순간에도 늘 함께 해주며,\n언제든 깊은 대화를 나눌 수 있는 단단하면서도 부드러운 연인이 되어줄 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n여린 당신의 든든한 버팀목이 되어 줄 다프네 브리저튼은 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>MJ</b>",
    description3:
      "당신과 비슷한 민감도를 가진 인물과는 매일이 살얼음판일 거예요.",
    imgIdx: 3,
  },
  {
    title: "소피",
    description: `<b>"난 보이는 모든 것들 속에 있는 좋은 점만 보아요"</b>\n\n\n신중하고 배려심이 많은 당신은 적극적으로 표현해주는 사람을 원하는군요!\n<a href="https://kinolights.com/title/15882?${utm}">&lt;맘마미아&gt;</a> 속 소피와 잘 맞을 것으로 보여요.\n\n\n자유분방하고 발랄한 성격의 소피는 모든 사람들과 잘 어울리는 성격이에요.\n모험심이 강하고 주도적인 성격이라 당신에게 거침없이 사랑을 표현할 거예요.\n그리고 곧 그녀는 당신과 많은 이야기들을 재미있게 나눌 수 있는 연인이 될 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n조심스러운 당신의 마음을 허물 소피는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>웬즈데이 아담스</b>",
    description3:
      "지적인 사고로 날카롭게 반응하는 상대는 당신에게 무례하다고 느껴질 거예요.",
    imgIdx: 1,
  },
  {
    title: "헤르미온느 그레인저",
    description: `<b>"닥쳐 말포이!"</b>\n\n\n고양이 같은 당신은 어른스러운 매력의 사람을 원하는군요!\n<a href="https://kinolights.com/title/6051?${utm}">&lt;해리포터&gt;</a> 속 헤르미온느 그레인저와 잘 맞을 것으로 보여요.\n\n\n헤르미온느 그레인저는 옳고 그름이 뚜렷하고 똑똑한 인물이에요.\n까칠한 듯 보이지만 기본적으로 배려심이 많은 성격이라 다정한 내면을 가지고 있죠.\n당신에게 끊임없이 새로운 지식을 제공해주고, 즐거운 대화거리를 이어나가는 연인이 될 거예요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n헤르미온느 그레인저는 예민한 당신의 취향을 충족시킬 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>엘사</b>",
    description3: "고민이 많은 스타일의 연인은 당신과 맞지 않을 거예요.",
    imgIdx: 2,
  },
  {
    title: "바넬로피",
    description: `<b>"넌 내 영웅이야!"</b>\n\n\n감정 표현이 서툰 당신은 당신과 반대의 매력을 가진 유쾌한 사람을 원하는군요!\n<a href="https://kinolights.com/title/38375?${utm}">&lt;주먹왕 랄프&gt;</a> 속 바넬로피와 잘 맞을 것으로 보여요.\n\n\n레이싱 카를 타고 질주하는 바넬로피는 밝고 명량한 성격을 가졌어요.\n당신의 직설적인 화법을 상처받지 않고 이해해줄 수 있는 당당하고 귀여운 애인이 되어줄 거예요.\n말보다 행동으로 표현하는 둘의 연애는 시원시원하고 재미있는 관계가 될 것 같네요.\n당신이 좋아하는 스타일이 아닌가요? 👀\n\n\n로봇 같은 당신에게 활력을 불어넣어줄 바넬로피는 분명 당신이 꿈꾸는 이상적인 파트너일 거예요!`,
    description2: "💔 당신과 맞지 않는 캐릭터\n\n<b>셀린</b>",
    description3:
      "감성적인 고민이 많은 연인과의 연애는 당신을 답답하게 할 거예요.",
    imgIdx: 0,
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
          backgroundImage: `url(${cdnPrefix}/female-r${id}.png)`,
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
          <Box
            component="img"
            alignItems="center"
            justifyContent="center"
            src={`${cdnPrefix}/female-r${data[id].imgIdx}.jpg`}
            sx={{
              width: "75%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "10px",
              mt: 2,
            }}
          />
          <div
            className="Result-Description"
            dangerouslySetInnerHTML={{ __html: data[id].description3 }}
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
            확인하고 커피 마시기 ☕️
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
                .writeText(
                  `https://mbti-fate-female.kinolights.com/result/${id}`
                )
                .then(() =>
                  alert(
                    "주소가 복사되었습니다.\n원하는 곳에 붙여넣기 해주세요."
                  )
                )
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
