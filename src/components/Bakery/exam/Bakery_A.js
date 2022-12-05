import "./Bakery_Test.scss";
import { useState } from "react";
import TestResult from "../../Cocktail/exam/Test_Result"

export default function CocktailA({name}) {

  let quest =  [ '1. 파운드케이크를 팬닝할 때 밑면의 껍질 형성을 방지하기위한 팬으로 가장 적합한 것은?',
                  '2. 반죽형 케이크에 특성에 해당되는 않는 것은?',
                  '3. 반죽형 쿠키의 굽기 과정에서 퍼짐성이 나쁠 때 퍼짐성을 좋게 하기 위해서 사용할 수 있는 방법은?',
                  '4. 파이를 만들 때 충전물이 흘러 나왔을 경우 그 원인이 아닌 것은?',
                  '5. 좋은 튀김기름의 조건이 아닌것은?',
                  '6. 파이를 냉장고에 휴지시키는 이유와 가장 거리가 먼 것은?',
                  '7. 반죽의 비중과 관련이 없는 것은?',
                  '8. 이스트의 3대 기능과 가장 거리가 먼 것은?',
                  '9. 반죽온도가 정상보다 낮을 때 나타나는 제품의 결과로 틀린 것은?',
                  '10. 컵에 반죽을 담았을 때 90g, 물을 담았을 때 110g이었다. 이때 컵 무게가 40g이었다면 반죽의 비중은?',
                  '11. 커스터드 푸딩을 컵에 채워 몇 도의 오븐에서 중탕으로 굽는 것이 가장 적당한가?',
                  '12. 과자의 반죽법 중 시폰형 반죽이란 무엇인가',
                  '13. 단순 아이싱(flat icing)을 만드는 데 들어가는 재료가 아닌 것은?',
                  '14. 아이싱에 이용되는 퐁당(fondant)은 설탕의 어떤 성질을 이용하는가?',
                  '15. 빵 제품의 모서리가 예리하게 된 것은 다음 중 어떤 반죽에서 오는 결과인가?',
                  '16. 지나친 반죽(과발효)가 제품에 미치는 영향을 잘못 설명한 것은?',
                  '17. 식빵의 가장 일반적인 포장 적온은?',
                  '18. 제빵용 밀가루의 적정 손상 전분의 함량은?',
                  '19. 빵을 오븐에 넣으면 빵 속의 온도가 높아지면서 부피가 증가한다. 이떄 일어나는 현상이 아닌 것은?',
                  '20. 발효의 목적이 아닌 것은?'
              
];
  var ans1 =     ['일반팬',
                  '일반적으로 밀가루가 계란보다 많이 사용된다.',
                  '입자가 굵은 설탕을 많이 사용한다.',
                  '충전물량이 너무 많다.',
                  '천연의 항산화제가 있다.',
                  '전 재료의 수화 기회를 준다.',
                  '완제품의 조직',
                  '팽창 작용',
                  '부피가 작다.',
                  '0.6',
                  '160~170℃',
                  '생물학 팽창제를 사용한다.',
                  '분당',
                  '보습성',
                  '발효가 지나친 반죽',
                  '부피가 크다.',
                  '15℃',
                  '1.5~3%',
                  '가스압이 증가한다.',
                  '반죽을 숙성시킨다.'

];
var ans2 =     ['이중팬',
                  '많은 양의 유지를 사용한다.',
                  '반죽을 오래한다',
                  '충전물에 설탕이 부족하다.',
                  '발연점이 높다.',
                  '유지와 반죽의 굳은 정도를 같게 한다.',
                  '가공의 크기',
                  '향 개발',
                  '큰 기포가 형성된다',
                  '0.7',
                  '190~200℃',
                  '모든 재료를 한꺼번에 넣고 반죽한다.',
                  '계란',
                  '재결정성',
                  '과다하게 이형유를 사용한 반죽',
                  '향이 강하다.',
                  '25℃',
                  '4.5~8%',
                  '이산화탄소 가스의 용해도 증가한다.',
                  '글루텐을 강화시킨다.'
];
var ans3 =     ['은박팬',
                  '화학 팽창제에 의해 부피를 형성한다.',
                  '오븐의 온도를 높인다.',
                  '껍질에 구멍을 뚫어놓지 않았다.',
                  '수분의 10% 정도이다',
                  '반죽을 경화 및 긴장시킨다.',
                  '완제품의 부피',
                  '저장성 증가',
                  '기공이 조밀하다.',
                  '0.8',
                  '210~220℃',
                  '유지와 설탕을 넣고 만족한다',
                  '물',
                  '용해성',
                  '어린 반죽',
                  '껍질이 뚜껍다.',
                  '35℃',
                  '11.5~14%',
                  '이스트의 효소활성이 60℃까지 계속된다.',
                  '풍미성분을 생성시킨다.'

];
var ans4 =     ['종이팬',
                  '해면같은 조직으로 입에서 감촉이 좋다.',
                  '설탕의 양을 줄인다.',
                  '오븐 온도가 낮다.',
                  '저장성과 안정성이 높다.',
                  '끈적거림을 방지하여 작업성을 좋게 한다.',
                  '팬 용적',
                  '반죽 발전',
                  '오븐에 굽는 시간이 약간 길다.',
                  '0.9',
                  '230~240℃',
                  '흰자와 노른자를 분리하여 반죽한다.',
                  '물엿',
                  '전화당으로 변하는 성질',
                  '2차 발효가 지나친 반죽 ',
                  '팬 흐름이 적다.',
                  '45℃',
                  '15.5~17%',
                  '79℃부터 알코올이 증발하여 특유의 향이 발생한다.',
                  '팽창작용을한다.'

];
var [Num,Numch] = useState(0);

var [sc,scch] = useState(0);
function add1(e){
  Numch(Num+1);

  var id = (e.target.value);
  switch(Num){
    case 0:                 // 1번 문제
      if(Num==0 && id== 2)
      scch(sc+5);
      console.log(sc);
    break;
    case 1:                 // 2번 
      if(Num==1 && id== 4)
      scch(sc+5);
    break;
    case 2:                 // 3번 
      if(Num==2 && id== 1)
      scch(sc+5);
    break;
    case 3:                 // 4번 
      if(Num==3 && id== 2)
      scch(sc+5);
    break;
    case 4:                 // 5번 
      if(Num==4 && id== 3)
      scch(sc+5);
    break;
    case 5:                 // 6번 
      if(Num==5 && id== 3)
      scch(sc+5);
    break;
    case 6:                 // 7번 
      if(Num==6 && id== 4)
      scch(sc+5);
    break;
    case 7:                 // 8번 
      if(Num==7 && id== 3)
      scch(sc+5);
    break;
    case 8:                 // 9번 
      if(Num==8 && id== 2)
      scch(sc+5);
    break;
    case 9:                 // 10번 
      if(Num==9 && id== 3)
      scch(sc+5);
    break;
    case 10:                 // 11번 문제
    if(Num==10 && id== 1)
    scch(sc+5);
    console.log(sc);
  break;
  case 11:                 // 12번 
    if(Num==11 && id== 4)
    scch(sc+5);
  break;
  case 12:                 // 13번 
    if(Num==12 && id== 2)
    scch(sc+5);
  break;
  case 13:                 // 14번 
    if(Num==13 && id== 2)
    scch(sc+5);
  break;
  case 14:                 // 15번 
    if(Num==14 && id== 3)
    scch(sc+5);
  break;
  case 15:                 // 16번 
    if(Num==15 && id== 4)
    scch(sc+5);
  break;
  case 16:                 // 17번 
    if(Num==16 && id== 3)
    scch(sc+5);
  break;
  case 17:                 // 18번 
    if(Num==17 && id== 2)
    scch(sc+5);
  break;
  case 18:                 // 19번 
    if(Num==18 && id== 2)
    scch(sc+5);
  break;
  case 19:                 // 20번 
    if(Num==19 && id== 2)
    scch(sc+5);
  break;
    

  }
}

   const[Result_save, setResult_save] =useState(false);

   function toggleTestPage(){
    setResult_save(true);
   }
  return (
    <div>
      <div id="exam_top_txt">모의시험 테스트 문제 A</div>
    {Num <= 19 ? 
      <div className="Exan_Test_container">
      <header className="Exam_header">
        <div id="Exam_header_text"> {quest[Num]}</div>

        <p id="Exam_btn_items"><button onClick={add1} value={1} >1</button> {ans1[Num]}</p>
       
       <p id="Exam_btn_items"><button onClick={add1} value={2}>2 </button> {ans2[Num]}</p>
       
       <p id="Exam_btn_items"><button onClick={add1} value={3}>3 </button> {ans3[Num]}</p>
      
       <p id="Exam_btn_items"><button onClick={add1} value={4}>4 </button> {ans4[Num]}</p>

      </header>

      
    </div>
    
  : <TestResult name={name} score={sc} mode="bakery"/>
  }
   </div>
  );
}
