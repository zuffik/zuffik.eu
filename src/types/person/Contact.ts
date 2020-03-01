import {Link} from "./Link";

export class Contact {
    constructor(
        public readonly phone: Link | string,
        public readonly email: Link | string,
        public readonly whatsApp: Link | string,
        public readonly instagram: Link | string,
        public readonly facebook: Link | string,
        public readonly twitter: Link | string,
        public readonly github: Link | string,
        public readonly pinterest: Link | string
    ) {}
}
