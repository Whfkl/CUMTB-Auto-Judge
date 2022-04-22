// ==UserScript==
// @name         CUMTB评教
// @namespace    https://jwxt.cumtb.edu.cn/*
// @version      0.1
// @author       Fk
// @match        https://jwxt.cumtb.edu.cn/evaluation-student-frontend/*
// @match        https://jwxt-cumtb-edu-cn-s.vpn.cumtb.edu.cn:8118/evaluation-student-frontend/*
// @description
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var TIME_OUT = 2000; //等待页面元素加载的时间
    function pjText() {
        var allText = [
            "上课很有激情，能让我充分沉浸到知识的海洋中",
            "有强烈的个人魅力，在课堂上能够最大限度地调动学生的主观能动性",
            "在“课程思政”方面做的很到位，不仅传授了海量有用的知识，同时也激发了我们的爱国情怀和专业认同感",
            "课堂节奏安排得当，保证了我们对知识的充分消化吸收",
            "课堂上师生互动频率高，课堂氛围活跃，不至于沉闷，提高了学习效率和学习效果",
            "专业知识扎实，旁征博引，极大地开阔了我们的视野"
        ];
        var text = "老师";
        for (var i = 0; i <= 2; i++) {
            var length = allText.length;
            for (;;) {
                var num = Math.floor((Math.random() * 20));
                if (allText[num] == undefined) {
                    continue
                }
                text += allText[num];
                text += "；";
                delete allText[num];
                break;
            }
        }
        console.log(text);
        return text;
    }

    function pj() {
        console.log('running');
        if (document.getElementById("pane-first") != null) {
            alert("请先选择一位老师，进入评教页面!");
            return;
        }
        var b = document.getElementsByClassName("el-radio-group")
        for (var i of b) {
            i.childNodes[0].click();
        }
        document.body.scrollTop = 15;

    }
    var div0 = document.createElement("div");
    div0.id = "last";
    document.body.appendChild(div0);
    var btn = document.createElement("button");
    btn.innerText = "一键好评";
    btn.onclick = function() { pj(); }
    btn.style = " position: fixed;bottom: 20px;right: 20px;display: block;background-color: #e00;height: 100px;width: 100px;border-radius: 15px;font-size: large;color: white;";
    document.body.appendChild(btn);

    function loadBtnb() {
        var btn1 = document.createElement("button")
        btn1.innerText = "示例评语";
        var b = document.getElementsByClassName("description");
        b[b.length - 1].appendChild(btn1);
        btn1.onclick = function() {
            var text = pjText();
            var inputbox = document.getElementsByClassName("el-textarea__inner")[0];
            var rawText = inputbox.value;
            inputbox.value = rawText + text.slice(0, text.length - 1) + "。";
            inputbox.dispatchEvent(new Event('focus'));
            inputbox.dispatchEvent(new Event('input'));
            inputbox.dispatchEvent(new Event('change'));
            inputbox.dispatchEvent(new Event('blur'));
        };
        var btn2 = document.createElement("button")
        btn2.innerText = "清空";
        btn2.style = "background-color: #6cf;";
        b[b.length - 1].appendChild(btn2);
        btn2.onclick = function() { document.getElementsByClassName("el-textarea__inner")[0].value = ""; }
        document.getElementById("progress-bar").style = "position: fixed";
    }
    setTimeout(loadBtnb, TIME_OUT);


})();