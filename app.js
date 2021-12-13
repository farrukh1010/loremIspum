const text = [
    'Established in May 1999 by famous spiritual and religious scholar Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust was built on the fundamentals of breaking the cycle of poverty, alleviating the financial troubles of the poor, giving people a chance to live a dignified life and spreading happiness.',
    'We are an organization that believes in lighting up the lives of underprivileged people across the world. We endeavor to provide the best quality services in areas including food, education, medical and social welfare free of cost to people living in the dark. With over 60 different sectors, we feed thousands of hungry people each day, hundreds more are given the hope of life through medical health care, many are educated to become leaders of tomorrow and several are given the opportunity to stand on their feet financially.',
    'Today, we are proud to say that our physical presence extends throughout Pakistan with a vast network of 125 branches operating in major cities including Karachi, Lahore, Islamabad, Rawalpindi, Hyderabad and Faisalabad. Apart from Pakistan, we have overseas offices in the UK, USA and UAE as well. Our worldwide branches are operating under the guidance of a team of over 3,500 working professionals who help almost 150,000 people on a daily basis.',
    'We strongly believe that a little help goes a long way and our work would not be possible without the generous support of our valuable donors. Our local and international donors have graciously lent us a hand by supporting our causes and enabling us to serve the needs of people in need.'
];
const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const numofparaRange = document.getElementById("numfparaRange");
const result = document.querySelector(".lorem-text");


numofpara.addEventListener('input', function (e) {
    const value = e.target.value;
    console.log(value);
    numofpara.value = value;
    numofparaRange.value = value
});



numofparaRange.addEventListener("input", function (e) {
    const value = e.target.value;
    console.log(value);
    numofparaRange.value = value;
    numofparaRange.value = value;

})
form.addEventListener('input', e => {
    e.preventDefault()
    const value = parseInt(numofpara.value);
    let temText = text.slice(0, value);
    checkText = temText.map(item => `<p class="result">${item} </p>`).join("");
    result.innerHTML = checkText;

    //   const value = parseInt(numofpara.value);
    // const random = Math.floor(Math.random() * text.length);

    // if (value === "" || isNaN(value) || value < 0 || value > 9 || value === 1) {
    //   result.innerHTML = `<p class="result">${text[random]}</p>`;
    // } else {
    //   let tempText = text.slice(0, value);
    //   tempText = tempText
    //     .map(function (item) {
    //       return `<p class="result">${item}</p>`;
    //     })
    //     .join("");
    //   result.innerHTML = tempText;
    // }


})
