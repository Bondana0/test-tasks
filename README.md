# test-tasks

<!-- Створена HTML-сторінка, що містить кредитний калькулятор

У файлі index.html розміщений код за допомогою якого HTML-сторінка має:
1. Має заголовок і форму для заповнення.
Форма loan-form.form-container: Форма калькулятора кредитів.
Поля вводу для суми кредиту та тривалості кредиту.
Ползунки для вибору значень суми кредиту та тривалості кредиту.
Сповіщення про помилки при введенні суми кредиту та тривалості кредиту.
Кнопка відправки форми для отримання кредиту.
Поля для відображення щоденного платежу та загальної суми погашення.

----------__________----------__________----------__________---------

У файлі styles.css розміщений код за допомогою якого:
1. Стилізована сторінка: розмір, флекси, колір. Використані псевдокласи для кнопки.
form: Задає ширину, відступи, рамку, фон та тінь для форми калькулятора кредиту.

label: Встановлює відображення ярликів над текстовими полями форми.

input[type="number"], input[type="range"], input[type="text"], button: Визначає вигляд текстових полів та кнопок у формі.input[type="number"], input[type="range"], input[type="text"], button: Визначає вигляд текстових полів та кнопок у формі.

button:hover, button:focus: Змінює колір кнопки при наведенні та фокусі на неї.
button:disabled: Встановлює стиль для вимкнутої кнопки.
----------__________----------__________----------__________---------

У файлі script.js розміщений скрипт за допомогою якого:
1. Калькулятор вираховує денну та загальну суму погашення кредиту за вказаними в полях "Сума кредиту:" і "Період погашення (днів):".
2. Реалізована валідація для полів з відображенням помилки, якщо значення значенння нижче(вище) ліміту, то поля відображають мінімальну суму чи кількість днів.

Функція restoreFromLocalStorage(), яка відновлює значення полів форми з локального сховища при завантаженні сторінки.

Функція updateLocalStorage(), яка зберігає значення полів форми в локальному сховищі при кожній зміні.

Функція showError(element, message), яка відображає повідомлення про помилку для конкретного елемента.Функція showError(element, message), яка відображає повідомлення про помилку для конкретного елемента.

Функція validateInputs(), яка перевіряє введені користувачем дані на валідність (сума кредиту та тривалість погашення) і відображає повідомлення про помилку, якщо вони не відповідають вимогам.

Функція calculatePayments(), яка розраховує щоденний платіж та загальну суму погашення за кредитом на основі введених користувачем даних, виводить результати на сторінці та зберігає їх у локальному сховищі.

Події input для полів вводу суми кредиту та тривалості погашення, які спрацьовують при зміні значення, оновлюють відповідний слайдер та викликають функцію calculatePayments().

Виклик функцій restoreFromLocalStorage() та calculatePayments() при завантаженні сторінки для відновлення даних та автоматичного розрахунку платежів.
-->
