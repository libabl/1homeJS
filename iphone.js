

customElements.define(
  "iphone-frame",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = `
       <style>
        body {
        background: #f4f6fc;
        }
        body:after {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        background-color: #3F436B;
        color: #fff;
        opacity: 0.6;
        }

        .iphone-x {
        position: relative;
        margin: 40px auto;
        width: 360px;
        height: 780px;
        background-color: #000000;
        // background-color: #7371ee;
        // background-image: linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
        border-radius: 40px;
        box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
        }
        .iphone-x:before, .iphone-x:after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        }
        .iphone-x:after {
        bottom: 7px;
        width: 140px;
        height: 4px;
        background-color: #f2f2f2;
        border-radius: 10px;
        }
        .iphone-x:before {
        top: 14px;
        width: 30%;
        height: 30px;
        background-color: #1f1f1f;
        border-radius: 40px;
        }
        .iphone-x i,
        .iphone-x b,
        .iphone-x s,
        .iphone-x span {
        position: absolute;
        display: block;
        color: transparent;
        }
        .iphone-x i {
        top: 18px;
        left: 50%;
        transform: translate(-50%, 6px);
        height: 8px;
        width: 15%;
        background-color: #101010;
        border-radius: 8px;
        box-shadow: inset 0px -3px 3px 0px rgba(255, 255, 255, 0.2);
        }
        .iphone-x b {
        left: 10%;
        top: 18px;
        transform: translate(180px, 4px);
        width: 12px;
        height: 12px;
        background-color: #101010;
        border-radius: 12px;
        box-shadow: inset 0px -3px 2px 0px rgba(255, 255, 255, 0.2);
        }
        .iphone-x b:after {
        content: "";
        position: absolute;
        background-color: #2d4d76;
        width: 6px;
        height: 6px;
        top: 2px;
        left: 2px;
        top: 3px;
        left: 3px;
        display: block;
        border-radius: 4px;
        box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
        }
        .iphone-x s {
        top: 50px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        width: 100%;
        font-size: 70px;
        font-weight: 100;
        padding-top: 60px;
        }
        .iphone-x span {
        bottom: 50px;
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        left: 30px;
        }
        .iphone-x span + span {
        left: auto;
        right: 30px;
        }

        .iphone-x .screen {
        width: 360px;
        height: 780px;
        border-radius: 40px;
         overflow: hidden;
        }
    </style>

    <div class="iphone-x">
        <i>Speaker</i>
        <b>Camera</b>

        <div class="screen">
            <slot></slot>
        </div>
    </div>
    `;
    }
  }
);
