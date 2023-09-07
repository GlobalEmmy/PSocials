//Side Bar variables
let menuItems = document.querySelectorAll(".menu-item");

//Messages variables
const messageNotification = document.querySelector("#message-notifications");
const messages = document.querySelector(".messages");
const messageCount = document.querySelector(
  "#message-notifications .notification-count"
);
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//Theme variables
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// ======== Notification ==============
// Remove active class from all menu items
let changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      changeActiveItem();
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ======== Messages ==============
//Search chat

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);

// Highligh message card when messages menu item is clicked

messageNotification.addEventListener("click", () => {
  messageCount.style.display = "none";
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//Theme / Display customization

const openThemeModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

//=================== Fonts =================

//Remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.stlye.setProperty("----sticky-top-left", "5.4rem");
      root.stlye.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.stlye.setProperty("----sticky-top-left", "5.4rem");
      root.stlye.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.stlye.setProperty("----sticky-top-left", "-2rem");
      root.stlye.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.stlye.setProperty("----sticky-top-left", "-5rem");
      root.stlye.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.stlye.setProperty("----sticky-top-left", "-12rem");
      root.stlye.setProperty("----sticky-top-right", "-35rem");
    }

    //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});
