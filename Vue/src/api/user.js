import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/User/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/User/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
