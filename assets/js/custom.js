function loadEmojis() {
    let array = [];
    let datas = new Map();
    datas.set(':food:', '../images/emojis/food.png');
    datas.set(':armor:', '../images/emojis/armor.png');
    datas.set(':heart:', '../images/emojis/heart.png');
    datas.set(':diamond:', '../images/emojis/diamond.png');
    datas.set(':iron_ingot:', '../images/emojis/iron_ingot.png');
    datas.set(':gold_coin:', '../images/emojis/gold_coin.png');
    datas.set(':sunglass:', '../images/emojis/sunglass.png');
    datas.set(':--:', '../images/emojis/expressionless.png');
    datas.set(':o:', '../images/emojis/open_mouth.png');
    datas.set(':tt:', '../images/emojis/tear.png');
    datas.set(':++:', '../images/emojis/neutral_face.png');
    datas.set(':^^:', '../images/emojis/smile.png');
    datas.set(':#--:', '../images/emojis/rage.png');
    datas.set(':!:', '../images/emojis/exclamation.png');
    datas.set(':?:', '../images/emojis/question.png');
    datas.forEach( (value, key) =>
        array.push("<tr align=\"center\"><td>" + key + "</td><td><img src=\"" + value + "\" alt=\"\"/></td></tr>")
    );
    return array;
}