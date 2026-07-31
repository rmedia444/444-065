tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", initPage);

bgm = document.getElementById('bgm');
clawDrop = document.getElementById('claw-drop');
win = document.getElementById('win');

bgm.volume = 0.3;
win.volume = 0.4;

const elements = {
  claw: document.getElementById("claw"),
  clawedItem: document.getElementById("clawed-item"),
  drawCta: document.getElementById("draw-cta"),
  dialog: document.getElementById("dialog"),
};

function initPage() {
  elements.drawCta.addEventListener("click", dropClawedItem);
}

function dropClawedItem() {
  bgm.play();
  win.play();
  win.pause();
  elements.claw.classList.add("clawCombine");
  // elements.claw.classList.add("claw-down");
  elements.clawedItem.classList.add("clawed-item");
 
  const rmvHiddenTimer = setTimeout(() => {
    elements.clawedItem.classList.remove("hidden");
    clearTimeout(rmvHiddenTimer);
  }, 1910);
  const addDropItem = setTimeout(() => {
    bgm.pause(); 
    setTimeout(() => {
     win.play();
    }, 1100)

    elements.clawedItem.classList.remove("clawed-item");
    elements.clawedItem.classList.add("drop-clawed-item");
    clearTimeout(addDropItem);
  }, 6100);
// 6100
  const showWinDialog = setTimeout(() => {
    showDialog();
    clearTimeout(showWinDialog);
  }, 6800);
}

function showDialog() {
  elements.dialog.classList.remove("hidden");
}
