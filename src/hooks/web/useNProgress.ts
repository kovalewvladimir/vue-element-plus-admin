import { nextTick, unref } from 'vue'
import type { NProgressOptions } from 'nprogress'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useCssVar } from '@vueuse/core'

const primaryColor = useCssVar('--el-color-primary', document.documentElement)

export function useNProgress() {
  NProgress.configure({ showSpinner: false } as NProgressOptions)
  initColor()

  async function initColor() {
    await nextTick()
    const bar = document.getElementById('nprogress')?.getElementsByClassName('bar')[0] as ElRef
    if (bar) {
      bar.style.background = unref(primaryColor.value)
    }
  }

  function start() {
    NProgress.start()
  }

  function done() {
    NProgress.done()
  }

  return {
    start,
    done
  }
}
