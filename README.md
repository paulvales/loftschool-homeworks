# Авторизация через контекст

[Пример работы](http://hw-context-auth.surge.sh)

В данной работе вам предстоит написать сразу несколько компонент, и связать их
всех при помощи контекста. Контекст создается с помощью компонента AuthProvider,
в нем должна быть определена логика авторизации пользователя, а также функции
авторизации, логаута и передача ошибки авторизации.

Функцию авторизации должна использовать форма, в которой пользователь вводит
свой логин и пароль. Форма подписана на контекст, и выводит ошибку авторизации
прямо у себя.

Флаг, авторизован ли пользователь получают хэдер и футер. В случае если
пользователь авторизован, футер выводит приветствие, а хэдер email и кнопку
выхода из сессии. Кнопка выхода из сессии вывызвает функцию logout, которую
предоставляет контекст.

Основной лэйаут рисуется компонентой Layout, он должен понимать как рендерить
main когда есть футер, когда есть хэдер, и когда есть и футер и хэдер.

email: stu@dent.com

password: 123
