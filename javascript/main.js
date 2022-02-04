//Next button
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", (event) => {
    quiz.questionIndex++;
    if(quiz.questionIndex == questions.length - 1){
        nextBtn.classList.add("hide");
    }
    if(quiz.questionIndex <= questions.length - 2 ){
        nextBtn.classList.remove("hide");
    }
    displayQuestion();
});

//Previous button
const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", (event)=>{
    quiz.questionIndex--;
    displayQuestion();
});

//Submit button
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
    showScores();
});

//Guess fxn
function guess(id, answer){
    let button = document.getElementById(id);
    resetHighlight(button)
    // let parent = button.parentElement
    button.onclick = function(){
        highlightAnswer(button)
        quiz.guess(answer);
        // displayQuestion();
    }
}


//an array of questions from a Database
const data = [
    {
        que: `HVAC Operation and Maintenance Besides just saving energy, what is an additional benefit of "economizers on HVAC units?`,
        arr: [`You gain optimum chiller capacity`,
        `Less refrigeration`,`Not as much "white" noise, thus, benefitting workers`,
        `Less wear on all moving parts`],
        ans:`Less wear on all moving parts`
    },
    {
        que: `In conference rooms, auditoriums, and other areas of assembly, the most significant heat gain is from:`,
        arr: [`Lighting`,
        `Ventilation`,
        `Equipment`, `People`],
        ans:`People`
    },
    {
        que: `To compensate for thermal load variance due to sun, wind, and outside temperature, the HVAC system uses:`,
        arr: [`Multiple systems`,
        `Integrated controls`,
        `Total capacity`, `Multiple zones`],
        ans:`Multiple zones`
    },
    {
        que: `HVAC Operation and Maintenance Besides just saving energy, what is an additional benefit of "economizers on HVAC units?`,
        arr: [`You gain optimum chiller capacity`,
        `Less refrigeration`,`Not as much "white" noise, thus, benefitting workers`,
        `Less wear on all moving parts`],
        ans:`Less wear on all moving parts`
    },
    {
        que: `The type of control that uses a varying signal in the control of heating, cooling and humidity is:`,
        arr: [`Two-position action`,
        `Timed two-position action`,`Floating action`,
        `Proportional action`],
        ans:`Proportional action`
    },
    {
        que: `In a closed loop HVAC system, the feedback process begins with the:`,
        arr: [`Controller`,
        `Sensor`,`Actuator`,
        `Controlled device`],
        ans:`Sensor`
    },
    {
        que: `The advent of the micro-electric controls has produced a concept known as:`,
        arr: [`Building management system`,
        `Energy management system`,`ICS (Integrated Comfort Systems)`,
        `Waste heat recovery system`],
        ans:`ICS (Integrated Comfort Systems)`
    },
    {
        que: `The heating system that uses a refrigeration cycle is the:`,
        arr: [`Heat pipe`,
        `Total energy system`,`Heat pump`,
        `Absorption system`],
        ans:`Heat pump`
    },
    {
        que: `The direct-expansion refrigerant HVAC system commonly used in newer one to two-story office buildings is:`,
        arr: [`Through the wall unit`,
        `Water-cooled unit`,`Rooftop unit`,
        `Fan-coil unit`],
        ans:`Rooftop unit`
    },
    {
        que: "The principal way to improve a building’s indoor air quality is to:",
        arr: [`Establish a no-smoking policy throughout the building`,
        `Educate occupants about the materials used in the building`,`Reduce the amount of outside air drawn into the building`,
        `Maintain acceptable temperature and relative humidity`],
        ans:`Maintain acceptable temperature and relative humidity`
    },
    {
        que: `The all-air system that requires minimum apparatus size and the least complicated duct system is the:`,
        arr: [`Single-duct VAT`,
        `Single-duct VAV`,`Multi-zone VAT`,
        `Dual-duct VAT`],
        ans:`Single-duct VAV`
    },
    {
        que: `The variable air volume (VAV) system depends on:`,
        arr: ["Sensors for static pressure in the ducts",
        "Water moved through pumps at a high rate",
        "Ducts of uniform size","Condenser water temperature of 75 degrees to 80 degrees"],
        ans:"Sensors for static pressure in the ducts"
    },
    {
        que: "HVAC systems are designed with a capacity based on:",
        arr: ["System performance with low life-cycle costs",
        "Median conditions under which they are expected to operate",
        "Physical characteristics of the building","Estimated maximum heating and cooling loads"],
        ans:"Estimated maximum heating and cooling loads"
    },
    {
        que: "Ceiling return air plenums control the spread of fire from space to space by:",
        arr: ["Spray-on insulation",
        "Fire dampers","Asbestos coatings","Ventilation"],
        ans:"Fire dampers"
    },
    {
        que: "Electrical Systems Operation and Maintenance The ratio of the maximum demand on an electrical system to the total connected load of a system is known as the:",
        arr: ["Energy factor","Load factor","Power factor","Demand factor"],
        ans:"Demand factor"
    },
    {
        que: "Lighting Applications and Maintenance As a part of a feasibility study, which evaluation approach analyzes all current and future financial implications of a capital project?",
        arr: ["Systems approach",
        "Life-cycle costing","Pay-back evaluation","Cost-benefit analysis"],
        ans:"Life-cycle costing"
    },
    {
        que: "The largest internal heat load in a typical office building is from:",
        arr: ["People","Office equipment","Ventilation","Lighting"],
        ans:"Lighting"
    },
    {
        que: "To save labor costs, group re-lamping should be done:",
        arr: [" At planned intervals","On an annual basis","At 90% rated life","During working hours"],
        ans:"At planned intervals"
    },
    {
        que: "In a space where workstations are at least 12 feet apart and not often relocated, the best choice for lighting is:",
        arr: ["Accent lighting",
        "Ambient lighting","Uniform lighting","Non-uniform lighting"],
        ans:"Non-uniform lighting"
    },
    {
        que: "The type of lighting that illuminates the general areas surrounding work positions is:",
        arr: ["Task lighting","Ambient lighting","Uniform lighting","Non-uniform lighting"],
        ans:"Ambient lighting"
    },
    {
        que: "The most practical choice for general illuminations of interior working areas in an office is:",
        arr: ["Fluorescent lighting","Incandescent lighting","High-Intensity discharge lamps","Combination of incandescent and HID lighting"],
        ans:"Fluorescent lighting"
    },
    {
        que: "If the main power fails in a building, the emergency power system for the elevators causes each elevator cab to:",
        arr: ["Close and lock its door","Remain open on its present floor","Go to the lowest designated floor","Maintain power to go up or down"],
        ans:"Go to the lowest designated floor"
    },
    {
        que: "Elevators in buildings that have more than seven stops and require faster operation are generally:",
        arr: ["Traction","Holed hydraulic","Dual service","Hole-less hydraulic"],
        ans:"Traction"
    },
    {
        que: "The heart of the elevator system and location of most routine maintenance is the:",
        arr: ["Hoist-way",
        "Cab","Pit","Machine room"],
        ans:"Machine room"
    },
    {
        que: "Assess the Core Business Places After establishing the space requirements and performance expectations",
        arr: ["Statement of need",
        "Systems approach","Space utilization","Programming"],
        ans:"Programming"
    },
    {
        que: "Security Compared to proprietary security, contract security typically produces:",
        arr: ["Better trained personnel",
        "A more favorable company image","Fewer management-personnel problems","Less expensive"],
        ans:"Less expensive"
    },
    {
        que: "Administrating Building Operations and Maintenance The level of maintenance that intends to preserve the performance expected from the equipment or system is:",
        arr: ["Troubleshooting",
        "Breakdown maintenance","Service maintenance","Preventive maintenance"],
        ans:"Preventive maintenance"
    },
    {
        que: "Efforts to keep equipment in good operating condition is called:",
        arr: ["Maintenance","Troubleshooting",
        "Monitoring","Inspection"],
        ans:"Maintenance"
    },
    {
        que: "The level of maintenance that meets basic manufacturer’s recommendations and requires a minimum level of skill is:",
        arr: ["Troubleshooting","Breakdown maintenance",
        "Service maintenance","Preventive maintenance"],
        ans:"Service maintenance"
    },
    {
        que: "What is the major goal of a preventive maintenance program?",
        arr: ["Extend the life of the facility’s fixed assets",
        " Reduce the overall cost of the maintenance program",
        "Provide assurance equipment is available when needed",
        "Reduce the number of times equipment is down unexpectedly"],
        ans:"Reduce the number of times equipment is down unexpectedly"
    },
    {
        que: "You have just bid a landscape maintenance contract.  The low bidder is unable to provide I-9 (right-to-work) forms for its foreign-born laborers.  What should you do?",
        arr: ["Disqualify the bidder",
        "Hire the low bidder if he can provide forms within 90 days",
        "Refer the problem to the legal department",
        "Agree to hire the low bidder if he does not use employees without forms"],
        ans:"Disqualify the bidder"
    },
]

//Create quiz questions
let questions = data.map(item => new Question(item.que,item.arr,item.ans));

//Create new quiz class instance
let quiz = new Quiz(questions);

//display questions
displayQuestion();

//Start countdown
startCountdown();