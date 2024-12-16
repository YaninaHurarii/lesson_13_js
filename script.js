/* Теоретичні питання
1. Яке призначення методу event.preventDefault() у JavaScript?
2. В чому сенс прийому делегування подій?
3. Які ви знаєте основні події документу та вікна браузера? 

Практичне завдання:

Реалізувати перемикання вкладок (таби) на чистому Javascript.

Технічні вимоги:

- У папці tabs лежить розмітка для вкладок. Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки. При цьому решта тексту повинна бути прихована. У коментарях зазначено, який текст має відображатися для якої вкладки.
- Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.
- Потрібно передбачити, що текст на вкладках може змінюватись, і що вкладки можуть додаватися та видалятися. При цьому потрібно, щоб функція, написана в джаваскрипті, через такі правки не переставала працювати.

 Умови:
 - При реалізації обов'язково використовуйте прийом делегування подій (на весь скрипт обробник подій повинен бути один).
*/
const centeredContent = document.querySelector(".centered-content");
const tabsContent = document.querySelector(".tabs-content").children;
const tabsTitle = document.querySelectorAll(".tabs-title");


function selectTab(tab) {
  let i = 0;
  for (const tabTitle of tabsTitle) {
    tabTitle.classList.remove("active");
    tabsContent[i].style.display = "none";
    i++;
  }

  tabsTitle[tab].classList.add("active");
  tabsContent[tab].style.display = "block";
};

if (centeredContent && tabsContent.length > 0 && tabsTitle.length === tabsContent.length) {
  centeredContent.addEventListener("mousedown", (e) => {
    let tabTarget = e.target;

    while (tabTarget && !tabTarget.classList.contains("tabs-title")) {
      tabTarget = tabTarget.parentElement;
    }
    if (!tabTarget) return;

    let tabIndex;
    
    for (let i = 0; i < tabsTitle.length; i++) {
      if (tabsTitle[i] === tabTarget) {
        tabIndex = i;
        break;
      }
    }

    if (tabIndex !== undefined) {
      selectTab(tabIndex);
    }
  });

  selectTab(0);
} 