function forEach() {
    let uniqueRegionList = [];
    let uniqueRoadList = [];
    const st = new Date();
    sample.forEach((object) => {
        uniqueRegionList = [...uniqueRegionList, object.region];
        uniqueRoadList = [...uniqueRoadList, object.roads];
    });
    console.log("반복문 실행시간 >>", st - new Date());
    const newList = new Set(uniqueRegionList);
    console.log(newList[0]);
    console.log(new Set(uniqueRoadList));
}

function option() {
    const uniqueRegionList = [];
    const uniqueRoadList = [];
    const st = new Date();
    sample.forEach((obj) => {
        if (!uniqueRegionList.includes(obj.region)) {
            uniqueRegionList.push(obj.region);
        }
        if (!uniqueRoadList.includes(obj.roads)) {
            uniqueRoadList.push(obj.roads);
        }
    });
    console.log(uniqueRegionList);
    console.log(uniqueRegionList.length);
    console.log(uniqueRoadList);
    console.log(uniqueRoadList.length);
    console.log("조건문 실행시간 >>", st - new Date());
}

forEach();
option();
