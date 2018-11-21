export class Todo {

    public id: any;
    public text: string;
    public done: boolean;

    constructor(text: string) {

        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.done = false;
        this.id   = String(Math.random());

    }
}
