const reasonsList = document.querySelector(".reasons__list");
const showMoreReasonsBtn = document.querySelector(".reasons__button");
const reasons = reasonsList.querySelectorAll(".reasons__item");
const lastReason = reasonsList.querySelector(".reasons__item--last");
const lastChildReason = reasons[reasons.length-1];

showMoreReasonsBtn.onclick = function() {
    reasons.forEach((reason) => {
        if(reason.classList.contains("reasons__item--hidden")) {
            reason.classList.remove("reasons__item--hidden");
            reason.classList.add("reasons__item--show");
            lastReason.classList.remove("reasons__item--last");
            lastChildReason.classList.add("reasons__item--last");
            showMoreReasonsBtn.innerHTML = "Скрыть"
        } else { reason.classList.remove("reasons__item--show");
        reason.classList.add("reasons__item--hidden");
        lastReason.classList.add("reasons__item--last");
        lastChildReason.classList.remove("reasons__item--last");
        showMoreReasonsBtn.innerHTML = "Показать все"
        }
    })
}
const textSection = document.querySelector(".about-company");
const hiddenText = textSection.querySelector(".about-company__text--hidden");
const showMoreTextBtn = textSection.querySelector(".show-more-btn");

showMoreTextBtn.onclick = function() {
    hiddenText.classList.toggle("about-company__text--hidden");
    
 }
