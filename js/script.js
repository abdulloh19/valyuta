'use strict'

const uzs = document.querySelector("#uzs"),
  usd = document.querySelector("#usd")

  uzs.addEventListener("input", () => {
    const request = new XMLHttpRequest() // constructor object qaytaradi

    request.open('GET', 'json/current.json') // so'rov nastroykani to'g'irlimiza
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8') // so'rov sarlavhasi
    request.send() // so'rovni yuborish

    request.addEventListener('load', () => {
      if(request.status === 200) {
        console.log(request.response);
        const data = JSON.parse(request.response)
        usd.value = (+uzs.value / data.current.usd).toFixed(2)
      }else {
        usd.value = 'Something went wrong' // error berganda chiqadi
      }
    })
  })
