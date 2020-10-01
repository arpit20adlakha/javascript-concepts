'use strict'

 class MongoError extends Error {
    constructor(message) {
        if (message instanceof Error) {
            super(message.message);
            this.stack = message.stack;
        } else {
            if (typeof message === 'string') {
                super(message);
            } else {
                super(message.message || message.errmsg || message.$err || 'n/a');
                if (message.errorLabels) {
                    this[kErrorLabels] = new Set(message.errorLabels);
                }

                for (var name in message) {
                    if (name === 'errorLabels' || name === 'errmsg') {
                        continue;
                    }

                    this[name] = message[name];
                }
            }

            Error.captureStackTrace(this, this.constructor);
        }

        this.name = 'MongoError';
    }
}