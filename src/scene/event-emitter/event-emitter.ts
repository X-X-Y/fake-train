import { eventsType } from "./type"

/**
 * @description 发布订阅机制
 */
class EventEmitter {
  private events: eventsType

  constructor () {
    this.events = {}
  }

  on(eventName: string, callback: Function): void {
    if(this.events[eventName]) {
      this.events[eventName].push(callback)
    }
    else {
      this.events[eventName] = [callback]
    }
  }
  
  emit(eventName: string, ...args: any[]): void {
    if(this.events[eventName]) {
      this.events[eventName].forEach(cb => cb(...args))
    }
  }

  off(eventName: string, callback: Function):void {
    if(this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
    }
  }
}

export default EventEmitter
