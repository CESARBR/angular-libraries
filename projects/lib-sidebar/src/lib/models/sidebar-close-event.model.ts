export class SidebarCloseEventModel {
    sidebarId: string;
    isClosed: boolean;

    constructor(id: string, isClosed: boolean = true) {
        this.sidebarId = id;
        this.isClosed = isClosed;
    }
}