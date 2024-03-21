// Date Picker(데이트픽커)
// jQuery-ui
$(function () {
  $("#startDate, #endDate").datepicker({});

  var today = new Date();
  var startDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());  // 오늘 날짜를 기준으로 1개월 이전 날짜 표기
  var endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  

  $("#startDate").datepicker("setDate", startDate);
  $("#endDate").datepicker("setDate", endDate);
});

$.datepicker.setDefaults({
    closeText: "닫기",
    prevText: "이전달",
    nextText: "다음달",
    currentText: "오늘",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
      "7월", "8월", "9월", "10월", "11월", "12월"
    ],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
      "7월", "8월", "9월", "10월", "11월", "12월"
    ],
    dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    weekHeader: "주",
    dateFormat: "yy-mm-dd", // 날짜 형식 지정
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: "년"
})