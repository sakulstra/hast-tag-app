import MobxFirebaseStore from 'mobx-firebase-store';
import {db} from '../';
import {authStore} from './../auth';

const allKey = 'allHashes';
const lastKey = 'lastHash';
class HashesStore extends MobxFirebaseStore {
    constructor() {
        super(db.ref());
    }

    all() {
        return this.getData(allKey);
    }

    last() {
        return this.getData(lastKey);
    }

    lastSubs() {
        const user = authStore.authUser();
        const userId = user && user.uid;
        return [{
            subKey: lastKey,
            asValue: true,
            path: `hashes/${userId}`,
            params: {limitToLast: 2},
        }]
    }

    allSubs() {
        const user = authStore.authUser();
        const userId = user && user.uid;
        return [{
            subKey: allKey,
            asList: true,
            path: `hashes/${userId}`,
            params: {limitToLast: 2},
        }];
    }
}

export default new HashesStore();