# Wavesurfer.js Player

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Wavesurfer.js Player — это простой и стильный аудиоплеер, разработанный для воспроизведения музыкальных треков с визуализацией спектра. Проект включает адаптивный дизайн и поддержку воспроизведения нескольких дорожек.

---

## 📖 Особенности

- 🎵 Воспроизведение треков с визуализацией спектра.
- 🚀 Интуитивно понятный интерфейс.
- 📱 Адаптивный дизайн, подходящий для различных устройств.
- 🎛️ Лёгкая настройка внешнего вида и функциональности.

---

## 🖼️ Скриншоты

![Screenshot 2024-12-31 at 21 39 46](https://github.com/user-attachments/assets/9a0410d2-9349-43fe-9ffe-fde7c0dfab24)

---

## 🚀 Установка и запуск

### 1. Клонирование репозитория
Склонируйте проект на ваш компьютер:
```bash
git clone https://github.com/cvrseq/another_player.git
cd another_player
```
### 2. Запуск проекта локально

Для запуска проекта используйте любой статический сервер. Например, с помощью Python:
```python
python3 -m http.server
```
Затем откройте в браузере:
```arduino
http://localhost:8000
```
### 3. Деплой на хостинг

Скопируйте все файлы проекта на ваш хостинг с поддержкой HTML, CSS и JavaScript. Для треков и peaks.json убедитесь, что пути настроены корректно.


## 📂Структура проекта
```plaintext
another_player/
├── photos/          # Изображения для сайта
├── tracks/          # Треки для воспроизведения
├── TildaSans.07TTF/ # Шрифты
├── index.html       # Главная HTML-страница
├── style.css        # Стили
├── script.js        # Основной JavaScript-код
├── peaks.json       # Пики для визуализации треков
└── LICENSE          # Лицензия
```

## ⚙️ Использование

    Поместите ваши треки в папку tracks/.
    Обновите peaks.json для каждого трека. Используйте audiowaveform для генерации пиков:
```bash
audiowaveform -i your_audio.mp3 -o peaks.json --pixels-per-second 20
```

Настройте пути к трекам в script.js и index.html.


## 🔧 Разработка

Если вы хотите внести изменения в проект:

    Убедитесь, что у вас установлен любой текстовый редактор, например VSCode.
    Отредактируйте файлы index.html, style.css или script.js по необходимости.
    Для отладки используйте инструменты разработчика браузера (F12).

## 📄 Лицензия

Этот проект лицензирован на условиях лицензии MIT. Вы можете свободно использовать, модифицировать и распространять этот код.
## ✉️ Коммерческое предложение

Ищете стильный и удобный аудиоплеер для вашего проекта?

Another Player идеально подойдёт для:

    Личных музыкальных портфолио.
    Сайтов с подкастами или обучающими материалами.
    Коммерческих платформ для стриминга музыки.

предлагается:

    Индивидуальную настройку: Доработаю дизайн и функциональность под ваши нужды.
    Интеграцию: Помогу внедрить плеер на ваш сайт или платформу.
    Поддержку: Гарантирую техническое сопровождение и обновления.

💬 Свяжитесь со мной для обсуждения сотрудничества:
Email: skuenemy@gmail.com

⭐ Если вам понравился проект, не забудьте поставить звёздочку на GitHub!
