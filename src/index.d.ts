import { SceEvent, SceMain, Updateable } from "sce-plugin-typings";
export declare class CodeGenerator implements SceMain {
    private rawCode;
    private styledCode;
    static scePlugin: boolean;
    static pluginName: string;
    code: any;
    constructor();
    initialize(): void;
    getRawGeneratedCode(): string;
    getStyledGeneratedCode(): string;
    onComplete(x: Updateable): void;
    onNextEvent(ev: SceEvent, x: Updateable): void;
}



