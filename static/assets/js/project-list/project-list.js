$(function () {
    /* screen type tabs */
    let screenTabs = $(".screen-type > li");
    let tabContents = $(".tab-pane");

    $(tabContents).hide();
    $(tabContents).eq(0).show();

    $(screenTabs).click(function () {
        $(screenTabs).removeClass("active");
        $(this).addClass("active");
        $(tabContents).hide();

        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    // JSON 데이터를 가져와 테이블에 채움
    function getJSONAndFillTable(jsonFilePath, sectionId) {
        $.getJSON(jsonFilePath, function (data) {
            fillTableWithData(data, sectionId);

            // 진행률 생성
            var groupTotal = data.rows.length; // 전체 프로젝트 수
            var $complete = $("#" + sectionId + " .working-list tbody .complete"), // 진행상태가 '완료'인 td 선택
                comTotal = $complete.length; // 완료된 프로젝트 수

            var $ongoing = $("#" + sectionId + " .working-list tbody .edit"), // 진행중인 td 선택
                ongoingTotal = $ongoing.length; // 진행중인 프로젝트 수

            var groupProgress = (comTotal / groupTotal) * 100; // 전체 진척률 계산

            $("#" + sectionId + " .state-wrap .all").text(groupTotal); // 전체 프로젝트 수 표시
            $("#" + sectionId + " .state-wrap .ing").text(ongoingTotal); // 진행 중인 프로젝트 수 표시
            $("#" + sectionId + " .state-wrap .end").text(comTotal); // 완료된 프로젝트 수 표시
            $("#" + sectionId + " .state-wrap .percent").text(~~groupProgress + "%"); // 진척률 표시
        });
    }

    // JSON 데이터를 테이블에 채우는 함수
    function fillTableWithData(data, sectionId) {
        var $tbody = $("#" + sectionId).find(".working-list tbody");
        $tbody.empty(); // 기존 테이블 내용 삭제

        $.each(data.rows, function (index, row) {
            // JSON 데이터로부터 행을 생성하여 테이블에 추가
            var $tr = $("<tr>");
            $tr.append($("<td>").text(index + 1)); // No 컬럼 채우기 (행의 인덱스에 1을 더한 값)

            $.each(row, function (key, value) {
                // 나머지 열의 데이터를 td에 삽입
                var $td = $("<td>").text(value);

                // 진행상태에 따라 클래스 부여 및 상태란의 텍스트 생성
                if (key === "진행상태") {
                    if (value.indexOf("진행대기") > -1) {
                        $td.addClass("undecided");
                    } else if (value.indexOf("보류") > -1) {
                        $tr.addClass("hold");
                    } else if (value.indexOf("제거") > -1) {
                        $tr.addClass("delete");
                    } else if (value.indexOf("진행중") > -1) {
                        $td.addClass("edit");
                    } else if (value.indexOf("완료") > -1) {
                        $tr.addClass("complete");
                    }
                }

                if (key === "File_Directory_URL") {
                    var modifiedValue = value.replace(/^\.\//, ""); // './'로 시작하는 부분을 ''(공백)으로 대체
                    $td.empty().html(
                        '<a class="url" href="' + modifiedValue + '" target="_blank">' + modifiedValue + "</a>"
                    );
                }

                $tr.append($td);
            });
            // tbody에 행 추가
            $tbody.append($tr);
        });
    }

    // 각 섹션에 대해 JSON 파일을 가져와 테이블에 채우기
    getJSONAndFillTable("/static/assets/js/project-list/data/screen-web.json", "web");
    getJSONAndFillTable("/static/assets/js/project-list/data/screen-mo.json", "mo");
    getJSONAndFillTable("/static/assets/js/project-list/data/screen-admin.json", "admin");

    // 페이지 로드 시 테이블을 채웁니다.
    window.onload = fillTableWithData;
});
