
export class UserCreatedEvent {
    constructor(
        public readonly userId: number,

        public readonly fullName: string,

        public readonly email: string

    ) { }
} 