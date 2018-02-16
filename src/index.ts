import {SceEvent, SceMain, Updateable} from "sce-plugin-typings";

export class CodeGenerator implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static scePlugin = true;
  public static pluginName = 'my-special-plugin';
  public code = [] as any;
  
  constructor() {
  
  }
  
  initialize() {
  
  }
  
  getRawGeneratedCode() {
    // return this.rawCode;
    
    return 'donkey kong (my-special-plugin) ' + this.code.join(' ');
  }
  
  getStyledGeneratedCode() {
    return this.styledCode;
  }
  
  onComplete(x: Updateable) {
    this.code.push('complete');
    x.updateCode();
  }
  
  onNextEvent(ev: SceEvent, x: Updateable) {
    
    this.code.push(this.code.length);
    x.updateCode();
  }
  
}

































