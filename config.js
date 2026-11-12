/* Основные параметры демо-проекта. Изменяйте здесь после согласования с владельцем. */
window.SITE_CONFIG = Object.freeze({
  company: {
    name: 'Чистая Империя',
    city: 'Казань',
    address: 'ул. Академика Лаврентьева, 11А',
    phone: '+7 (987) 000-33-24',
    phoneHref: 'tel:+79870003324',
    yandexDirectory: 'https://yandex.ru/services/kazan_uborka-kvartiry',
    isOfficial: false,
    acceptRealLeads: false,
  },
  pricing: {
    mode: 'request_only',
    hasVerifiedRateCard: false,
    note: 'Точная стоимость после уточнения объёма работ.',
  },
  services: [
    { id: 'apartment', title: 'Уборка квартир', short: 'Для дома, где хочется отдыхать.', detail: 'Подберите уборку квартиры с учётом площади и ваших пожеланий.', image: 'assets/svg/room-apartment.svg', bg: 'sage', availability: 'listed' },
    { id: 'house', title: 'Уборка домов', short: 'Пространство для всей семьи.', detail: 'Опишите дом, желаемый объём работ и удобный формат уборки.', image: 'assets/svg/room-house.svg', bg: 'sand', availability: 'listed' },
    { id: 'after', title: 'После ремонта', short: 'Новый этап без строительной пыли.', detail: 'Уточните объём послеремонтных задач и особенности помещения.', image: 'assets/svg/room-after.svg', bg: 'mist', availability: 'listed' },
    { id: 'deep', title: 'Генеральная уборка', short: 'Когда хочется основательного порядка.', detail: 'Укажите зоны, которым нужно особое внимание, и желаемый объём работ.', image: 'assets/svg/room-deep.svg', bg: 'cream', availability: 'catalog' },
    { id: 'maintenance', title: 'Поддерживающая уборка', short: 'Чистота в привычном ритме.', detail: 'Опишите регулярность и работы, которые планируете поручить.', image: 'assets/svg/room-maintenance.svg', bg: 'sage', availability: 'catalog' },
    { id: 'windows', title: 'Мойка окон', short: 'Больше света в каждом дне.', detail: 'Добавьте пожелание по мойке окон. Доступность и стоимость уточняются.', image: 'assets/svg/room-windows.svg', bg: 'mist', availability: 'catalog' },
  ],
  types: [
    { id: 'maintenance', title: 'Поддерживающая', badge: 'Для привычного ритма', copy: 'Подойдёт, если вы хотите поддерживать порядок между более основательными уборками. Конкретный состав работ оговаривается отдельно.', tasks: ['Повседневные зоны', 'Поверхности и полы', 'Пожелания по комнатам'], image: 'assets/svg/room-maintenance.svg' },
    { id: 'deep', title: 'Генеральная', badge: 'Больше внимания деталям', copy: 'Формат для более глубокого наведения порядка. Состав и объём работ зависят от помещения и согласованных задач.', tasks: ['Подробный список зон', 'Дополнительные пожелания', 'Согласованный объём работ'], image: 'assets/svg/room-deep.svg' },
    { id: 'after', title: 'После ремонта', badge: 'Для нового начала', copy: 'Когда после отделочных работ нужно подготовить пространство к жизни. Отдельно уточняются загрязнения и особенности материалов.', tasks: ['Послестроительные загрязнения', 'Площадь и тип объекта', 'Специфика поверхностей'], image: 'assets/svg/room-after.svg' },
  ],
  extras: [
    { id: 'windows', label: 'Мойка окон' },
    { id: 'kitchen', label: 'Особое внимание кухне' },
    { id: 'bathroom', label: 'Особое внимание санузлу' },
    { id: 'schedule', label: 'Обсудить регулярную уборку' },
  ],
  // Источники для ручной проверки (содержание каталогов не является официальным прайсом):
  sources: [
    'https://yandex.ru/services/kazan_uborka-kvartiry',
    'https://laundry-wash.ru/clean/kazan/chistaya-imperiya-221382999214',
  ],
});
