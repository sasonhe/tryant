import {getCookie,setCookie} from '@/utils/cookie'
const state = {
  sidebar: {
    opened:getCookie('sidebarStatus') ? !!+getCookie('sidebarStatus') : true,
    withoutAnimation: false,
  },
  device: 'desktop'
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      setCookie('sidebarStatus', 1, 60)
    } else {
      setCookie('sidebarStatus', 0, 60)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    setCookie('sidebarStatus', 0, 60)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
