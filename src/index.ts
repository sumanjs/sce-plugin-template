import {SceEvent, SceMain, Updateable} from "sce-plugin-typings";

export class SCEPlugin implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static scePlugin = true;
  public static pluginType = 'code-generator';
  public static pluginName = 'my-special-plugin';
  public code = [] as any;
  
  constructor() {
  
  }
  
  initialize() {
  
  }
  
  getRawGeneratedCode() {
    // return this.rawCode;
    
    return 'donkey song (my-special-plugin) ' + this.code.join(' ') + 'fppnare';
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

































