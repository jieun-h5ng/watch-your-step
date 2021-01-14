   /*체크 최대 값 제한*/

   var maxChecked = 5;   //선택가능한 체크박스 갯수
   var totalChecked = 0; // 설정 끝
   function CountChecked(field) {

       if (field.checked)
           totalChecked += 1;
       else
           totalChecked -= 1;

   }
   function ResetCount() {
       totalChecked = 0;
   }

   /*체크 박스 출력하기*/
   function getCheckboxValue() {
       // 선택된 목록 가져오기
       const query = 'input[name="check_name"]:checked';
       const selectedEls =
           document.querySelectorAll(query);

       // 선택된 목록에서 value 찾기
       let result = '';
       selectedEls.forEach((el) => {
           result += el.value + '\r\n';

       });
       // 출력
       document.getElementById('result').innerText
           = result;
   }

   /* 모달 기능*/
   const openButton = document.getElementById("open");
   const modal = document.querySelector(".modal");

   const overlay = modal.querySelector(".modal_overlay");
   const closeBtn = modal.querySelector("#close");

   //모달 창 열기
   const openModal = () => {
       if (totalChecked > maxChecked) {
           alert("✔ 꼭 실천할 수 있는 항목 5개만 선택해주세요😀");
           field.checked = false;
           totalChecked -= 1;
       } else if (totalChecked < 1) {
           alert("❌ 항목이 선택되지 않았어요.");
           field.checked = false;
           totalChecked -= 1;
       } else {
           modal.classList.remove("hidden")
       }

   }

   //모달 창 닫기
   const closeModal = () => {
       modal.classList.add("hidden")
   }
   overlay.addEventListener("click", closeModal);
   closeBtn.addEventListener("click", closeModal);
   openButton.addEventListener("click", openModal);
