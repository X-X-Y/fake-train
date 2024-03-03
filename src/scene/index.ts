import deepCopy from '@/scene/deep-copy/deep-copy'
import EventEmitter from '@/scene/event-emitter/event-emitter'
import { myApply, myBind, myCall } from './call-apply-bind'
import { flatArray, flatObj } from './flat'
import memoFunc from '@/scene/memo/memo-func'
import curryFunc from '@/scene/curry/curry-func'
import debounse from '@/scene/debounse/debounse'
import throttle from '@/scene/throttle/throttle'
import { exampleReflectProxy, exampleReflectOwnKeys } from './Reflact'
import myNew from '@/scene/New/my-new'
import myInstanceOf from '@/scene/instanceof/my-instanceOf'

export {
	deepCopy,
	EventEmitter,
	myCall,
	myApply,
	myBind,
	flatArray,
	flatObj,
	memoFunc,
	curryFunc,
	debounse,
	throttle,
	exampleReflectProxy,
	exampleReflectOwnKeys,
	myNew,
	myInstanceOf,
}
