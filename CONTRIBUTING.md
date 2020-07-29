# Руководство по сотрудничеству

## Настройка среды разработки

Для начала необходимо установить последнюю версию [Node LTC](https://nodejs.org/en/) и для уменьшения текста предполагаю, что она у вас уже установлена и работает (проверить можно командой ``$ npm version``) (От переводчика: установить ее можно набрав в терминале Linux команду: ``$ apt install npm`` (использую Linux Mint или Ubuntu))

Затем в копии репозитория нужно установить все зависимости.

 Сначала установим yarn командой:
``npm install -g yarn``
(От переводчика: данная команда выполняется с правами администратора. А противном случае вы получите ошибки)

 Затем установим / обновим зависимости командой
``yarn`` 

 Если вы устанавливаете это впервые или происходили обновления данных, нужно выполнить полную сборку командой:
``yarn build``

 Восстановление может быть выполнено командой
``yarn build-dev``

Необязательно: можете смотреть и строить данные:
``yarn build-dev --watch``

После вышеописанных действий можно запустить вебсервер выполнив команду
``yarn dev``
После этой команды он будет доступен по адресу: localhost:4000