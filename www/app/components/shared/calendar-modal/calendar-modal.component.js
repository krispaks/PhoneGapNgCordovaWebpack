import CalendarModalController from './calendar-modal.controller';
export default {
    name: 'calendarModalComponent',
    config: {
        template: '<div></div>',
        controller: [CalendarModalController],
        bindings: {
            option: '<',
            onOk: '&'            
        }
    }
}
