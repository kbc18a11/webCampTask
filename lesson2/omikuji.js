/**
 * おみくじの判定
 * @param {Number} rand この乱数によって、おみくじの判定が変わる
 * @returns {string} おみくじの当たりの種類
 */
const userResult = (rand) => {
    //おみくじの当たりの種類
    const hitType = ['大吉', '中吉', '小吉', '吉', '凶'];

    return hitType[rand];
};

/**
 * @param {string} userName ダイアログから入力されたユーザの名前
 * @returns {string} userNameが入力されていればそのまま返し、
 *                  されていなければ「名無し」を返す
 */
const isName = (userName) => {
    //ダイアログは入力されたか？
    if (userName) {
        return userName;
    }
    //名前が入力されてなかったら、「名無し」という名前にする
    return '名無し';
};


//ユーザの名前をダイアログから入力
const userName = prompt("お名前を教えて下さい。");
//ユーザの名前を<span id="name">に表示
document.getElementById("name").textContent = isName(userName);

//おみくじの判定用の乱数
const rand = Math.floor(Math.random() * 5);
//おみくじの判定を<span id="result">に表示
document.getElementById("result").textContent = userResult(rand);
