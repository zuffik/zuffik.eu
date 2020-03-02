import {Link} from "./Link";

export class Contact {
    constructor(
        public readonly phone: Link,
        public readonly email: Link,
        public readonly whatsApp: string,
        public readonly instagram: Link,
        public readonly facebook: Link,
        public readonly twitter: Link,
        public readonly github: Link,
        public readonly pinterest: Link
    ) {}
}
