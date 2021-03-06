import moment from 'moment'
import Vue from 'vue';

export default Vue.filter('formatDate', (value) => {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
    }
});

