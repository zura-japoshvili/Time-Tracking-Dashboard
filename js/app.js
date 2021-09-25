const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const c_work = document.querySelector(".c-work");
const p_work = document.querySelector(".p-work");
const c_play = document.querySelector(".c-play");
const p_play = document.querySelector(".p-play");
const c_study = document.querySelector(".c-study");
const p_study = document.querySelector(".p-study");
const c_exercise = document.querySelector(".c-exercise");
const p_exercise = document.querySelector(".p-exercise");
const c_social = document.querySelector(".c-social");
const p_social = document.querySelector(".p-social");
const c_care = document.querySelector(".c-care");
const p_care = document.querySelector(".p-care");


let workIndex;
let playIndex;
let studyIndex;
let exerciseIndex;
let socialIndex;
let careIndex;

let Data;
async function getInfo() {
    const response = await fetch("./js/data.json");
    const data = await response.json();
    distFunc(data);
}
addEventListener('load', getInfo());
function distFunc(data){
    Data = data;
        for (let i = 0; i < Data.length; i++) {
        if (Data[i].title === "Work") {
            workIndex = Data[i];
        }
        if (Data[i].title === "Play") {
            playIndex = Data[i];
        }
        if (Data[i].title === "Study") {
            studyIndex = Data[i];
        }
        if (Data[i].title === "Exercise") {
            exerciseIndex = Data[i];
        }
        if (Data[i].title === "Social") {
            socialIndex = Data[i];
        }
        if (Data[i].title === "Self Care") {
            careIndex = Data[i];
        }
    }
    updateDaily();
}

daily.addEventListener("click", updateDaily);
weekly.addEventListener("click", updateWeekly);
monthly.addEventListener("click", updateMonthly);


function updateDaily() {
    daily.style.color = "#fff";
    weekly.style.color = "#6b6fad";
    monthly.style.color = "#6b6fad";
    c_work.textContent = workIndex.timeframes.daily.current + "hrs";
    p_work.textContent = "last week-" + workIndex.timeframes.daily.previous + "hrs";

    c_play.textContent = playIndex.timeframes.daily.current + "hrs";
    p_play.textContent = "last week-" + playIndex.timeframes.daily.previous + "hrs";

    c_study.textContent = studyIndex.timeframes.daily.current + "hrs";
    p_study.textContent = "last week-" + studyIndex.timeframes.daily.previous + "hrs";

    c_exercise.textContent = exerciseIndex.timeframes.daily.current + "hrs";
    p_exercise.textContent = "last week-" + exerciseIndex.timeframes.daily.previous + "hrs";

    c_social.textContent = socialIndex.timeframes.daily.current + "hrs";
    p_social.textContent = "last week-" + socialIndex.timeframes.daily.previous + "hrs";

    c_care.textContent = careIndex.timeframes.daily.current + "hrs";
    p_care.textContent = "last week-" + careIndex.timeframes.daily.previous + "hrs";
}

function updateWeekly() {
    daily.style.color = "#6b6fad";
    weekly.style.color = "#fff";
    monthly.style.color = "#6b6fad";

    c_work.textContent = workIndex.timeframes.weekly.current + "hrs";
    p_work.textContent = "last month-" + workIndex.timeframes.weekly.previous + "hrs";

    c_play.textContent = playIndex.timeframes.weekly.current + "hrs";
    p_play.textContent = "last month-" + playIndex.timeframes.weekly.previous + "hrs";

    c_study.textContent = studyIndex.timeframes.weekly.current + "hrs";
    p_study.textContent = "last month-" + studyIndex.timeframes.weekly.previous + "hrs";

    c_exercise.textContent = exerciseIndex.timeframes.weekly.current + "hrs";
    p_exercise.textContent = "last month-" + exerciseIndex.timeframes.weekly.previous + "hrs";

    c_social.textContent = socialIndex.timeframes.weekly.current + "hrs";
    p_social.textContent = "last month-" + socialIndex.timeframes.weekly.previous + "hrs";

    c_care.textContent = careIndex.timeframes.weekly.current + "hrs";
    p_care.textContent = "last month-" + careIndex.timeframes.weekly.previous + "hrs";
}

function updateMonthly() {
    daily.style.color = "#6b6fad";
    weekly.style.color = "#6b6fad";
    monthly.style.color = "#fff";

    c_work.textContent = workIndex.timeframes.monthly.current + "hrs";
    p_work.textContent = "last week-" + workIndex.timeframes.monthly.previous + "hrs";

    c_play.textContent = playIndex.timeframes.monthly.current + "hrs";
    p_play.textContent = "last week-" + playIndex.timeframes.monthly.previous + "hrs";

    c_study.textContent = studyIndex.timeframes.monthly.current + "hrs";
    p_study.textContent = "last week-" + studyIndex.timeframes.monthly.previous + "hrs";

    c_exercise.textContent = exerciseIndex.timeframes.monthly.current + "hrs";
    p_exercise.textContent = "last week-" + exerciseIndex.timeframes.monthly.previous + "hrs";

    c_social.textContent = socialIndex.timeframes.monthly.current + "hrs";
    p_social.textContent = "last week-" + socialIndex.timeframes.monthly.previous + "hrs";

    c_care.textContent = careIndex.timeframes.monthly.current + "hrs";
    p_care.textContent = "last week-" + careIndex.timeframes.monthly.previous + "hrs";
}