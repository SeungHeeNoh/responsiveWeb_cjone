## 반응형웹 제작 프로젝트: CJOne Hompage
HTML5, CSS3, JQuery를 이용하여 반응형웹을 제작하였습니다.  미디어 쿼리를 이용하여 PC, 노트북, 태블릿과 모바일에서 자동으로 해상도와 레이아웃이 변경됩니다.


## 반응형 웹이란?
반응형 웹이란, 디스플레이 종류에 따라 화면의 크기가 자동으로 최적화되도록 조절되는 웹페이지입니다.


## Contents
![enter image description here](https://lh3.googleusercontent.com/kkY7_ELa6LRHUESCPqO7AlbOAtDiA-Y-jmiueAGcc7vmBpCTJ37NG5LF8koOSmkJNvtBBmvIiEX0 "responsiveWeb: cjone")


## Demo
>http://eunsuk5143.dothome.co.kr/cjone


## Bug : JQuery forces style "overflow:hidden"
해당 프로젝트를 진행하는 도중, JQuery의 .animate()가 실행될 때마다 inline style로 overflow:hidden이 추가되는 상황이 발생했다. 하지만 JQuery와 CSS 파일 내부에서 문제를 발생시키는 요소를 전혀 찾을 수 없었다.
구글링 결과, 오래된 버전의 JQuery안에 있는 버그가 해당 문제를 발생시킨다는 사실을 깨달았다. 해당 프로젝트에서 사용된 JQuery의 버전은 1.8.3.으로 버그를 가지고 있는 오래된 버전 중에 하나로 보인다. 해결방법은 .animate() 콜백함수에 "overflow:visible"를 추가하는 것이다.
추가정보로, 해당 버그는 오래된 버전의 JQuery slideup에서도 동일하게 발생한다.


## Project period
2018.03.09 ~ 2018.03.19.