import 'colors';

export class Logger {
  public log = (...args: string[]) => {
    console.log('[log]'.green, ...args);
  };

  public info = (...args: string[]) => {
    console.log('[info]'.blue, ...args);
  };

  public error = (...args: string[]) => {
    console.log('[error]'.red, ...args);
  };

  public title = (title: string) => {
    console.log('');
    console.log(`${title}`.cyan);
    console.log('',);
  };
}

export const logger = new Logger();
