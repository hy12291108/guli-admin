import request from '@/utils/request'

const api_name = '/statistics'
export default {

  createStatistics(day) {
    return request({
      url: `${api_name}/${day}`,
      method: 'post'
    })
  }
}
